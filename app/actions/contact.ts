'use server'

import { prisma } from '@/lib/prisma'
import { contactMessageSchema } from '@/lib/validations'
import { z } from 'zod'

export async function submitContactMessage(data: unknown) {
  try {
    const validated = contactMessageSchema.parse(data)

    const message = await prisma.contactMessage.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        message: validated.message,
        userId: 'system',
      },
    })

    return {
      success: true,
      data: message,
      message: 'Message sent successfully! We will get back to you soon.',
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
      error: 'An error occurred while sending your message',
    }
  }
}

export async function getContactMessages(
  page: number = 1,
  limit: number = 10,
  isRead?: boolean
) {
  try {
    const skip = (page - 1) * limit

    const where: any = {}
    if (isRead !== undefined) {
      where.isRead = isRead
    }

    const [messages, total] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactMessage.count({ where }),
    ])

    return {
      success: true,
      data: messages,
      total,
      pages: Math.ceil(total / limit),
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch messages',
    }
  }
}

export async function markMessageAsRead(id: string) {
  try {
    const message = await prisma.contactMessage.update({
      where: { id },
      data: { isRead: true },
    })

    return {
      success: true,
      data: message,
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to update message',
    }
  }
}

export async function markMessageAsUnread(id: string) {
  try {
    const message = await prisma.contactMessage.update({
      where: { id },
      data: { isRead: false },
    })

    return {
      success: true,
      data: message,
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to update message',
    }
  }
}

export async function deleteContactMessage(id: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id },
    })

    return {
      success: true,
      message: 'Message deleted successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to delete message',
    }
  }
}

export async function getUnreadMessageCount() {
  try {
    const count = await prisma.contactMessage.count({
      where: { isRead: false },
    })

    return {
      success: true,
      count,
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch count',
    }
  }
}
