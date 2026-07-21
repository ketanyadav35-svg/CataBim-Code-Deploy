import {
  Building2,
  Layers,
  Wind,
  Boxes,
  type LucideIcon,
} from 'lucide-react'

export type CourseFaq = { question: string; answer: string }

export type Course = {
  slug: string
  title: string
  icon: LucideIcon
  level: string
  duration: string
  totalHours: string
  summary: string
  overview: string
  whoShouldJoin: string
  outcomes: string[]
  software: string[]
  realProjects: string
  careers: string[]
  certification: string[]
  faqs: CourseFaq[]
}

export const courses: Course[] = [
  {
    slug: 'revit-tool-training-arch-structure',
    title: 'Revit Tool Training (Architecture / Structure)',
    icon: Building2,
    level: 'Beginner to Intermediate',
    duration: '2 Months',
    totalHours: '80 Hours',
    summary:
      'Tool-focused Revit training for architectural and structural modeling, documentation, and coordination.',
    overview:
      'A tool-focused program that builds strong Revit fundamentals for architecture and structure — covering modeling, documentation, families, and coordination using industry-standard workflows.',
    whoShouldJoin:
      'Architecture and civil/structural students and professionals moving from CAD-based workflows to Revit and BIM.',
    outcomes: [
      'Build parametric architectural and structural models in Revit',
      'Generate plans, sections, elevations, and schedules',
      'Create and manage families and templates',
      'Use Navisworks and Dynamo for coordination and automation basics',
    ],
    software: ['Autodesk Revit', 'Autodesk Navisworks', 'Dynamo'],
    realProjects:
      'Guided modeling and documentation exercises for architectural and structural building components.',
    careers: ['Revit Modeler', 'Architectural BIM Modeler', 'Structural BIM Modeler'],
    certification: [
      'Autodesk Certification Preparation',
      'Skill India aligned training',
      'Preparation for Autodesk Certified User (ACU) – Revit Architecture',
      'Preparation for Autodesk Certified Professional (ACP) – Revit for Architectural Design',
    ],
    faqs: [
      { question: 'Do I need Revit experience beforehand?', answer: 'No, the course starts from fundamentals.' },
      { question: 'Does this cover both architecture and structure?', answer: 'Yes, tool workflows for both disciplines are covered.' },
      { question: 'Will I learn documentation, not just 3D modeling?', answer: 'Yes, drawing sets and schedules are part of the curriculum.' },
    ],
  },
  {
    slug: 'bim-professional-arch-structure',
    title: 'BIM Professional (Architecture / Structure) — Tool + Project',
    icon: Layers,
    level: 'Beginner to Advanced',
    duration: '4 Months',
    totalHours: '160 Hours',
    summary:
      'Comprehensive tool + project program covering architectural and structural BIM from fundamentals to a full project.',
    overview:
      'A complete BIM professional program combining Revit tool training with an end-to-end project. You learn architectural and structural modeling, documentation, coordination, and automation, then apply it on a full building project.',
    whoShouldJoin:
      'Students and professionals seeking job-ready, project-based BIM skills for architecture and structure roles.',
    outcomes: [
      'Master architectural and structural modeling workflows',
      'Deliver a coordinated model and full documentation set',
      'Run clash detection and coordination in Navisworks',
      'Automate repetitive tasks with Dynamo',
    ],
    software: ['Autodesk Revit', 'Autodesk Navisworks', 'Dynamo'],
    realProjects:
      'A full building project from concept modeling through coordinated documentation for architecture and structure.',
    careers: ['BIM Architect', 'Architectural BIM Coordinator', 'Structural BIM Coordinator', 'Revit Modeler'],
    certification: [
      'Autodesk Certification Preparation',
      'Preparation for Autodesk Certified User (ACU) – Revit Architecture',
      'Preparation for Autodesk Certified Professional (ACP) – Revit for Architectural Design',
    ],
    faqs: [
      { question: 'Is this suitable for beginners?', answer: 'Yes, it starts from fundamentals and progresses to project-level work.' },
      { question: 'What makes this different from the tool training?', answer: 'It adds an end-to-end project and deeper coordination and automation.' },
      { question: 'Do I work on a real project?', answer: 'Yes, you complete a full architectural/structural project as part of the program.' },
    ],
  },
  {
    slug: 'revit-mep-tool-training',
    title: 'Revit MEP Tool Training',
    icon: Wind,
    level: 'Beginner to Intermediate',
    duration: '2 Months',
    totalHours: '80 Hours',
    summary:
      'Tool-focused Revit MEP training covering mechanical, electrical, and plumbing modeling and routing.',
    overview:
      'A tool-focused program building strong Revit MEP fundamentals — covering system setup, routing, and documentation for mechanical, electrical, and plumbing disciplines.',
    whoShouldJoin:
      'Mechanical, electrical, and plumbing engineers and designers moving into BIM-based MEP workflows.',
    outcomes: [
      'Model HVAC, electrical, and plumbing systems in Revit',
      'Manage system routing, sizing, and clearances',
      'Generate MEP documentation and schedules',
      'Use Navisworks for MEP coordination basics',
    ],
    software: ['Autodesk Revit', 'Autodesk Navisworks'],
    realProjects:
      'Guided MEP system modeling and routing exercises for a sample building.',
    careers: ['Revit MEP Modeler', 'MEP BIM Designer', 'HVAC/Electrical BIM Modeler'],
    certification: [
      'Autodesk Certification Preparation',
      'Skill India aligned training',
      'Preparation for Autodesk Certified User (ACU) – Revit',
      'Preparation for Autodesk Certified Professional (ACP) – Revit MEP',
    ],
    faqs: [
      { question: 'Do I need to know all three MEP disciplines?', answer: 'No, an overview of all three is provided and you can focus on your specialty.' },
      { question: 'Is prior Revit experience required?', answer: 'No, MEP tool fundamentals are taught from the start.' },
      { question: 'Does this include coordination?', answer: 'Yes, introductory MEP coordination in Navisworks is covered.' },
    ],
  },
  {
    slug: 'bim-professional-mep',
    title: 'BIM Professional MEP — Tool + Project',
    icon: Boxes,
    level: 'Beginner to Advanced',
    duration: '4 Months',
    totalHours: '160 Hours',
    summary:
      'Comprehensive tool + project program covering MEP BIM from fundamentals to a full coordinated project.',
    overview:
      'A complete MEP BIM professional program combining Revit MEP tool training with an end-to-end project. You learn modeling, routing, coordination, and automation, then apply them on a full multi-discipline MEP project.',
    whoShouldJoin:
      'MEP professionals and graduates seeking job-ready, project-based MEP BIM skills.',
    outcomes: [
      'Master mechanical, electrical, and plumbing modeling workflows',
      'Deliver coordinated MEP models and documentation',
      'Run clash detection and coordination in Navisworks',
      'Automate MEP tasks with Dynamo',
    ],
    software: ['Autodesk Revit', 'Autodesk Navisworks', 'Dynamo'],
    realProjects:
      'A full MEP project including system modeling, coordination, and clash resolution for a commercial building.',
    careers: ['MEP BIM Coordinator', 'Revit MEP Modeler', 'MEP BIM Designer'],
    certification: [
      'Autodesk Certification Preparation',
      'Preparation for Autodesk Certified User (ACU) – Revit',
      'Preparation for Autodesk Certified Professional (ACP) – Revit MEP',
    ],
    faqs: [
      { question: 'Is this suitable for beginners?', answer: 'Yes, it starts from fundamentals and builds to project-level MEP work.' },
      { question: 'What is the difference from the MEP tool training?', answer: 'It adds an end-to-end project plus deeper coordination and automation.' },
      { question: 'Do I work on a real project?', answer: 'Yes, you complete a full MEP project as part of the program.' },
    ],
  },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}
