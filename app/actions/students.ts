'use server'

import { prisma } from '@/lib/prisma'
import { studentRegistrationSchema } from '@/lib/validations'
import { verifyTurnstile } from '@/lib/turnstile'
import { z } from 'zod'

export async function registerStudent(data: unknown) {
  try {
    const turnstileToken = (data as { turnstileToken?: string })?.turnstileToken
    const captchaOk = await verifyTurnstile(turnstileToken)
    if (!captchaOk) {
      return {
        success: false,
        error: 'CAPTCHA verification failed. Please complete the verification and try again.',
      }
    }

    const validated = studentRegistrationSchema.parse(data)

    // Check if email already exists
    const existingStudent = await prisma.student.findUnique({
      where: { email: validated.email },
    })

    if (existingStudent) {
      return {
        success: false,
        error: 'Email already registered',
      }
    }

    // Generate registration ID
    const registrationId = `CAT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    const student = await prisma.student.create({
      data: {
        registrationId,
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        qualification: validated.qualification,
        currentProfession: validated.currentProfession,
        selectedCourse: validated.selectedCourse,
        preferredBatch: validated.preferredBatch,
        adminNotes: validated.message || null,
      },
    })

    return {
      success: true,
      data: student,
      registrationId: student.registrationId,
      message: 'Registration successful! We will contact you soon.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || 'Validation failed',
      }
    }

    return {
      success: false,
      error: 'An error occurred during registration',
    }
  }
}

export async function getStudents(
  page: number = 1,
  limit: number = 10,
  search?: string,
  courseFilter?: string,
  statusFilter?: string
) {
  try {
    const skip = (page - 1) * limit

    const where: any = {}

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { registrationId: { contains: search } },
      ]
    }

    if (courseFilter) {
      where.selectedCourse = courseFilter
    }

    if (statusFilter) {
      where.status = statusFilter
    }

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip,
        take: limit,
        orderBy: { registrationDate: 'desc' },
      }),
      prisma.student.count({ where }),
    ])

    return {
      success: true,
      data: students,
      total,
      pages: Math.ceil(total / limit),
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch students',
    }
  }
}

export async function getStudentById(id: string) {
  try {
    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        orders: true,
        payments: true,
      },
    })

    if (!student) {
      return {
        success: false,
        error: 'Student not found',
      }
    }

    return {
      success: true,
      data: student,
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch student',
    }
  }
}

export async function updateStudent(id: string, data: any) {
  try {
    const student = await prisma.student.update({
      where: { id },
      data,
    })

    return {
      success: true,
      data: student,
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to update student',
    }
  }
}

export async function deleteStudent(id: string) {
  try {
    await prisma.student.delete({
      where: { id },
    })

    return {
      success: true,
      message: 'Student deleted successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to delete student',
    }
  }
}
