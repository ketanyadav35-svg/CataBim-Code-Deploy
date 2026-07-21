import {
  Building2,
  Frame,
  Wind,
  Route,
  ScanLine,
  Code2,
  type LucideIcon,
} from 'lucide-react'

export type ServiceFaq = { question: string; answer: string }
export type WorkflowStep = { title: string; description: string }

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  summary: string
  cardItems: string[]
  hero: string
  overview: string
  benefits: string[]
  workflow: WorkflowStep[]
  software: string[]
  deliverables: string[]
  industries: string[]
  faqs: ServiceFaq[]
}

export const services: Service[] = [
  {
    slug: 'architectural-modeling',
    title: 'Architectural Modeling',
    icon: Building2,
    summary: 'Coordinated, data-rich architectural models from concept to construction documentation.',
    cardItems: ['Architectural Modeling', 'Revit Family Creation', 'Shop Drawings'],
    hero: 'Architectural BIM models that turn design intent into build-ready documentation.',
    overview:
      'We produce parametric architectural models that carry accurate geometry and embedded data from early design through construction documentation. Every model is built to your standards, structured for coordination, and ready to generate reliable drawings, schedules, and quantities.',
    benefits: [
      'Design intent captured as intelligent, parametric geometry',
      'Construction-ready drawing sets generated directly from the model',
      'Consistent standards, templates, and family libraries',
      'Fewer documentation errors and faster revisions',
      'A single source of truth for every discipline to coordinate against',
    ],
    workflow: [
      { title: 'Requirements & Standards', description: 'We align on LOD, templates, naming conventions, and deliverable scope.' },
      { title: 'Model Development', description: 'Walls, floors, roofs, and components are modeled parametrically to spec.' },
      { title: 'Families & Content', description: 'Custom Revit families and libraries are built for reusable, accurate content.' },
      { title: 'Documentation', description: 'Plans, sections, elevations, and schedules are generated from the model.' },
      { title: 'QA & Handover', description: 'Models are audited against standards and delivered with supporting drawings.' },
    ],
    software: ['Autodesk Revit', 'Autodesk Navisworks'],
    deliverables: ['Architectural Revit models', 'Construction document sets', 'Custom Revit families', 'Clash detection & clash-free modeling', 'Schedules & quantities', 'Sheet packages'],
    industries: ['Commercial', 'Residential', 'Hospitality', 'Retail', 'Institutional'],
    faqs: [
      { question: 'What levels of detail (LOD) do you deliver?', answer: 'We model anywhere from LOD 100 through LOD 500 depending on the project stage and your deliverable requirements.' },
      { question: 'Can you work to our office standards?', answer: 'Yes. We adopt your templates, naming conventions, and family standards, or help you establish them.' },
      { question: 'Do you deliver full documentation, not just 3D models?', answer: 'Yes. Complete, coordinated construction document sets are produced directly from the model.' },
    ],
  },
  {
    slug: 'structural-modeling',
    title: 'Structural Modeling',
    icon: Frame,
    summary: 'Structural BIM models, detailing, and rebar ready for fabrication and coordination.',
    cardItems: ['Structural Modeling', 'As-Built Models', 'Rebar & Detailing'],
    hero: 'Structural BIM that integrates cleanly with architecture and MEP.',
    overview:
      'Our structural modeling covers foundations, framing, connections, and reinforcement, produced to integrate seamlessly within a coordinated model environment. We deliver detailing and rebar models that support both documentation and fabrication.',
    benefits: [
      'Accurate structural geometry coordinated with other disciplines',
      'Rebar and connection detailing ready for fabrication',
      'Reliable quantities for estimation and procurement',
      'Reduced site rework through early clash resolution',
      'As-built models that reflect real conditions',
    ],
    workflow: [
      { title: 'Input Review', description: 'We review structural drawings, calculations, and reference models.' },
      { title: 'Framing & Foundations', description: 'Primary and secondary structure is modeled to specification.' },
      { title: 'Rebar & Detailing', description: 'Reinforcement and connection details are modeled for fabrication.' },
      { title: 'Coordination', description: 'Structure is checked against architecture and MEP for clashes.' },
      { title: 'Delivery', description: 'Documentation, schedules, and coordinated models are handed over.' },
    ],
    software: ['Autodesk Revit', 'Advance Steel', 'Navisworks', 'AutoCAD'],
    deliverables: ['Structural Revit models', 'Rebar detailing models', 'Fabrication-ready details', 'Clash detection & clash-free modeling', 'Structural drawings', 'As-built models'],
    industries: ['Commercial', 'Infrastructure', 'Industrial', 'Residential', 'Institutional'],
    faqs: [
      { question: 'Do you model reinforcement detailing?', answer: 'Yes, rebar modeling and detailing are a core part of our structural service.' },
      { question: 'Can you produce fabrication-ready steel models?', answer: 'Yes, we deliver detailed steel models suitable for fabrication and shop drawings.' },
      { question: 'Do you coordinate with MEP and architecture?', answer: 'Yes, structural models are coordinated and clash-checked against all disciplines.' },
    ],
  },
  {
    slug: 'mep-modeling',
    title: 'MEP Modeling',
    icon: Wind,
    summary: 'Mechanical, electrical, and plumbing models coordinated and fabrication-ready.',
    cardItems: ['MEP Modeling', 'Systems Coordination', 'Fabrication-Ready Models'],
    hero: 'MEP BIM modeling and coordination built for clash-free installation.',
    overview:
      'We model HVAC, electrical, and plumbing systems with accurate routing, clearances, and connectivity. MEP models are coordinated against architecture and structure to resolve conflicts before they reach the field, and can be delivered fabrication-ready.',
    benefits: [
      'Fully routed, connected MEP systems',
      'Maintenance and installation clearances respected',
      'Early clash resolution across all disciplines',
      'Fabrication-ready spooling and detailing',
      'Reliable material take-offs for procurement',
    ],
    workflow: [
      { title: 'System Setup', description: 'Systems, families, and standards are configured to your requirements.' },
      { title: 'Routing & Modeling', description: 'Ducts, pipes, and conduits are modeled with correct sizing and connectivity.' },
      { title: 'Coordination', description: 'MEP is coordinated with structure and architecture to clear clashes.' },
      { title: 'Fabrication Detailing', description: 'Models are refined to fabrication-level detail and spooling.' },
      { title: 'Delivery', description: 'Coordinated models, drawings, and take-offs are handed over.' },
    ],
    software: ['Autodesk Revit', 'Navisworks', 'Autodesk Fabrication', 'AutoCAD MEP'],
    deliverables: ['MEP Revit models', 'Coordinated system layouts', 'Fabrication spool drawings', 'Clash detection & clash-free modeling', 'Material take-offs'],
    industries: ['Commercial', 'Healthcare', 'Data Centers', 'Hospitality', 'Industrial'],
    faqs: [
      { question: 'Do you cover mechanical, electrical, and plumbing?', answer: 'Yes, we model all MEP disciplines and coordinate them within a shared model.' },
      { question: 'Can you deliver fabrication-ready MEP models?', answer: 'Yes, we produce fabrication-level detailing and spool drawings.' },
      { question: 'How are clashes handled?', answer: 'We run clash detection in Navisworks and resolve conflicts collaboratively before delivery.' },
    ],
  },
  {
    slug: 'infrastructure-modeling',
    title: 'Infrastructure Modeling',
    icon: Route,
    summary: 'Civil and infrastructure BIM for roads, corridors, and site development.',
    cardItems: ['Infrastructure Modeling', 'Civil 3D Modeling', 'Corridor & Site Models'],
    hero: 'Infrastructure BIM for roads, corridors, and large-scale site development.',
    overview:
      'We deliver civil and infrastructure models covering terrain, corridors, roads, drainage, and site development. Using Civil 3D and coordinated BIM workflows, we produce data-rich models that support design, quantities, and construction planning.',
    benefits: [
      'Accurate terrain and corridor modeling',
      'Coordinated site and utility layouts',
      'Reliable earthwork and material quantities',
      'Integration with vertical BIM disciplines',
      'Support for phasing and construction planning',
    ],
    workflow: [
      { title: 'Survey & Terrain', description: 'Survey data is processed into accurate existing-condition surfaces.' },
      { title: 'Corridor & Alignment', description: 'Roads, alignments, and corridors are modeled to design criteria.' },
      { title: 'Site & Utilities', description: 'Grading, drainage, and utility networks are developed.' },
      { title: 'Coordination', description: 'Infrastructure is coordinated with structures and site constraints.' },
      { title: 'Delivery', description: 'Models, quantities, and documentation are handed over.' },
    ],
    software: ['Autodesk Civil 3D', 'Autodesk Revit', 'Navisworks', 'InfraWorks'],
    deliverables: ['Civil 3D models', 'Corridor & road models', 'Grading & drainage models', 'Clash detection & clash-free modeling', 'Earthwork quantities', 'Coordination models'],
    industries: ['Transportation', 'Public Infrastructure', 'Utilities', 'Urban Development', 'Industrial'],
    faqs: [
      { question: 'Which software do you use for infrastructure?', answer: 'Primarily Autodesk Civil 3D and InfraWorks, coordinated with Revit and Navisworks.' },
      { question: 'Can you generate earthwork quantities?', answer: 'Yes, cut/fill and material quantities are produced directly from the models.' },
      { question: 'Do you coordinate infrastructure with vertical BIM?', answer: 'Yes, site and infrastructure models are coordinated with building disciplines.' },
    ],
  },
  {
    slug: 'advanced-bim',
    title: 'Advanced BIM',
    icon: ScanLine,
    summary: 'Scan to BIM, LOD 100–500 modeling, and 4D/5D BIM services.',
    cardItems: ['Scan to BIM', 'LOD 100–500 Modeling', '4D Simulation · 5D Cost · QTO · BEP'],
    hero: 'Advanced BIM: Scan to BIM, 4D scheduling, 5D cost, and BIM execution planning.',
    overview:
      'Our advanced BIM services extend modeling into reality capture, simulation, and data. From point-cloud Scan to BIM through 4D construction sequencing, 5D cost modeling, quantity take-offs, and BIM Execution Plans, we help you get more value from your models.',
    benefits: [
      'Accurate as-built models from point-cloud data',
      '4D construction sequencing for planning and communication',
      '5D cost modeling tied to model quantities',
      'Reliable quantity take-offs (QTO)',
      'Structured BIM Execution Plans (BEP)',
    ],
    workflow: [
      { title: 'Reality Capture', description: 'Point clouds and survey data are registered and prepared.' },
      { title: 'Scan to BIM', description: 'As-built models are built to the required LOD from point clouds.' },
      { title: '4D / 5D Integration', description: 'Schedules and cost data are linked to model elements.' },
      { title: 'Quantities & Data', description: 'QTO and data outputs are produced from the model.' },
      { title: 'BEP & Delivery', description: 'BIM Execution Plans and deliverables are finalized.' },
    ],
    software: ['Autodesk ReCap', 'Revit', 'Navisworks', 'Autodesk Takeoff'],
    deliverables: ['Scan to BIM as-built models', '4D construction sequences', '5D cost models', 'Quantity take-offs', 'BIM Execution Plans'],
    industries: ['Renovation & Retrofit', 'Infrastructure', 'Commercial', 'Heritage', 'Industrial'],
    faqs: [
      { question: 'What is Scan to BIM?', answer: 'It is the process of converting laser-scan point-cloud data into an accurate as-built BIM model.' },
      { question: 'Do you offer 4D and 5D BIM?', answer: 'Yes, we link construction schedules (4D) and cost data (5D) to model elements.' },
      { question: 'Can you prepare a BIM Execution Plan?', answer: 'Yes, we develop structured BEPs aligned with project and client requirements.' },
    ],
  },
  {
    slug: 'software-services',
    title: 'Software Services',
    icon: Code2,
    summary: 'Custom software for the AEC industry: Revit plugins, Autodesk APIs, and BIM automation.',
    cardItems: ['Revit Plugin Development', 'BIM Automation', 'Custom BIM Tools'],
    hero: 'Custom software solutions that automate and extend your BIM workflows.',
    overview:
      'CATABIM develops custom software solutions for the AEC industry. We build Revit plugins, Autodesk API integrations, Dynamo scripts, and workflow automation tools that eliminate repetitive tasks, enforce standards, and connect your BIM data to the rest of your business.',
    benefits: [
      'Automate repetitive modeling and documentation tasks',
      'Enforce standards and reduce manual errors',
      'Connect BIM data with your other systems and databases',
      'Tools tailored precisely to your workflows',
      'Faster delivery and measurable productivity gains',
    ],
    workflow: [
      { title: 'Discovery', description: 'We map your workflow, pain points, and automation opportunities.' },
      { title: 'Solution Design', description: 'We scope the tool, integrations, and success criteria with you.' },
      { title: 'Development', description: 'Plugins, APIs, and scripts are built and iterated against real data.' },
      { title: 'Testing & QA', description: 'Tools are tested across projects and hardened for production use.' },
      { title: 'Deployment & Support', description: 'We deploy, document, train your team, and provide ongoing support.' },
    ],
    software: ['Revit API (C# / .NET)', 'Dynamo', 'Autodesk Platform Services (Forge)', 'Python', 'Navisworks API'],
    deliverables: [
      'Revit Plugin Development',
      'Autodesk API Development',
      'BIM Automation',
      'Dynamo Automation',
      'Custom BIM Tools',
      'Workflow Automation',
      'Engineering Software Solutions',
    ],
    industries: ['Architecture Firms', 'Engineering Consultancies', 'Contractors', 'BIM Service Providers', 'Infrastructure Developers'],
    faqs: [
      { question: 'What kinds of tools can you build?', answer: 'Revit plugins, Autodesk API integrations, Dynamo scripts, data connectors, and full workflow automation tools tailored to your process.' },
      { question: 'Which technologies do you use?', answer: 'Primarily the Revit API with C#/.NET, Dynamo, Python, and Autodesk Platform Services (Forge).' },
      { question: 'Do you provide support after delivery?', answer: 'Yes, we provide documentation, training, and ongoing maintenance and support.' },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
