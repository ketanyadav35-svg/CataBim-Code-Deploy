export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  date: string
  author: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Complete Guide to LOD Levels in BIM',
    slug: 'lod-levels-guide',
    excerpt: 'Understanding Level of Development (LOD) is crucial for delivering accurate BIM models. Learn the differences between LOD 100–500.',
    category: 'BIM Modeling',
    date: 'Jul 13, 2024',
    author: 'Sarah Johnson',
    readTime: '8 min read',
    content: `
# The Complete Guide to LOD Levels in BIM

Level of Development (LOD) is one of the most fundamental concepts in Building Information Modeling. Understanding and correctly implementing LOD standards is essential for any organization working with BIM.

## What is LOD?

LOD defines the degree of accuracy, detail, and reliability of information contained in a BIM model element. The LOD standard provides clear definitions of what information should be included in a model at each stage of the design and construction process.

### The Five LOD Levels

**LOD 100 - Conceptual**
- Schematic representation
- Used during conceptual design
- Elements shown as single lines or generic shapes
- Useful for preliminary feasibility studies

**LOD 200 - Design Development**
- Approximate geometry and dimensions
- General characteristics understood
- Used for design development phases
- Good for spatial coordination

**LOD 300 - Construction Documents**
- Complete geometry and size information
- Ready for construction administration
- Contains detailed information
- Used for construction drawings

**LOD 400 - Fabrication/Assembly**
- All construction details are modeled
- Assembly information complete
- Ready for fabrication
- Includes specifications and details

**LOD 500 - As-Built**
- Verified as-built information
- Field-verified accuracy
- Reflects what was actually constructed
- Used for facility management and lifecycle planning

## Why LOD Matters

Defining LOD at each project phase ensures:
- Clarity of deliverables
- Appropriate level of detail for each workflow
- Efficient model development
- Clear communication between stakeholders
- Proper file sizes and performance

## Best Practices for LOD Implementation

1. Define LOD requirements in your project BIM execution plan
2. Communicate LOD requirements to all team members
3. Use LOD consistently across all disciplines
4. Document assumptions and decisions
5. Review and validate LOD compliance regularly

## Conclusion

Proper LOD implementation is key to successful BIM projects. By understanding and applying LOD standards correctly, you can ensure your models meet project requirements and support all stakeholders effectively.
    `,
  },
  {
    id: 2,
    title: 'Clash Detection Best Practices',
    slug: 'clash-detection-best-practices',
    excerpt: 'Discover how to effectively detect and resolve clashes in your BIM models before they become costly field issues.',
    category: 'Coordination',
    date: 'Jul 10, 2024',
    author: 'Michael Chen',
    readTime: '6 min read',
    content: `
# Clash Detection Best Practices

Clash detection is a critical aspect of BIM coordination that can save significant time and money during construction. Learn how to implement effective clash detection workflows.

## Understanding Clash Types

Clashes fall into several categories:

### Hard Clashes
- Physical collisions between objects
- Must be resolved before construction
- Most critical for field performance

### Soft Clashes
- Conflicts in accessibility or maintenance
- Require operational considerations
- Important for long-term facility management

### 4D Clashes
- Timing and sequence issues
- Related to construction methodology
- Affect project scheduling

## Clash Detection Workflow

1. **Preparation Phase**
   - Set clash detection rules
   - Define tolerances appropriately
   - Group elements logically

2. **Detection Phase**
   - Run clash detection analysis
   - Document all identified clashes
   - Categorize by severity and type

3. **Resolution Phase**
   - Assign clash resolution tasks
   - Coordinate between disciplines
   - Document solutions and changes

4. **Verification Phase**
   - Re-run detection after changes
   - Confirm all clashes resolved
   - Archive clash reports

## Tools and Software

Professional clash detection tools include:
- Navisworks Manage
- Solibri Model Checker
- Synchro
- BIM Track
- ViewpointQ

## Tips for Success

- Set appropriate detection tolerances
- Run clash detection regularly, not just at the end
- Involve all relevant disciplines
- Document decisions and changes
- Use clash detection to improve future projects
    `,
  },
  {
    id: 3,
    title: 'Revit Family Creation for MEP Systems',
    slug: 'revit-family-creation-mep',
    excerpt: 'Learn advanced techniques for creating parametric Revit families that work seamlessly with MEP coordination workflows.',
    category: 'Training',
    date: 'Jul 7, 2024',
    author: 'Emma Rodriguez',
    readTime: '10 min read',
    content: `
# Revit Family Creation for MEP Systems

Creating efficient and parametric MEP families is essential for successful BIM workflows. This guide covers best practices for MEP family creation.

## Family Types in MEP

### Hosted Families
- Mounted on other elements
- Examples: Wall-mounted equipment, roof-mounted units
- Require proper host element setup

### Non-Hosted Families
- Free-standing equipment
- Examples: Chiller units, AHUs
- More flexible placement

### System Component Families
- Part of system assignments
- Examples: Ductwork, piping segments
- Require proper system settings

## Best Practices

### Naming Conventions
- Use clear, descriptive names
- Include size/capacity information
- Document part numbers

### Parametric Design
- Use parameters for sizing flexibility
- Create type variations within families
- Link parameters to project data

### Construction Information
- Include fabrication details
- Add assembly instructions
- Specify connections and interfaces

## MEP-Specific Considerations

1. **Connectors**
   - Correct connector types
   - Proper sizing
   - Accessibility for connections

2. **Parameters**
   - Flow rates
   - Pressure ratings
   - Temperature ranges

3. **Graphics**
   - Clear representation
   - Detail levels for different LODs
   - Visibility controls

## Advanced Techniques

- Shared parameters for coordination
- Nested families for complex components
- Formula-driven sizing
- Connector arrays for flexible connections

## Conclusion

Well-designed MEP families are the foundation of efficient BIM workflows. Invest time in creating robust, parametric families that your team can reuse and build upon.
    `,
  },
  {
    id: 4,
    title: 'From Scan to BIM: A Step-by-Step Workflow',
    slug: 'scan-to-bim-workflow',
    excerpt: 'Explore the complete process of converting point cloud data into production-ready BIM models using modern software.',
    category: 'Advanced BIM',
    date: 'Jul 1, 2024',
    author: 'David Smith',
    readTime: '12 min read',
    content: `
# From Scan to BIM: A Step-by-Step Workflow

Scan-to-BIM is an increasingly important service that converts laser scan and photogrammetry data into usable BIM models. Learn the complete workflow.

## Scanning Phase

### Equipment Selection
- Laser scanners for precision
- Photogrammetry for texture
- RGB-D sensors for rapid capture

### Best Practices
- Multiple scan positions for complete coverage
- Proper registration targets
- Documentation of scan parameters
- Quality checks during scanning

## Data Processing

### Initial Processing
- Merge point clouds from multiple scans
- Registration and alignment
- Noise removal
- Decimation if needed

### Quality Assessment
- Check point cloud density
- Verify coverage completeness
- Identify missing areas
- Assess accuracy requirements

## BIM Modeling

### Prioritize Key Elements
- Structural systems
- Major building components
- MEP systems
- Architectural features

### Modeling Strategies
- Use point cloud as background reference
- Model from bottom-up (structure first)
- Verify dimensions constantly
- Match LOD to project requirements

### Quality Assurance
- Cross-check measurements
- Verify against point cloud
- Ensure component consistency
- Document modeling assumptions

## Data Integration

### Coordinate System
- Establish project coordinates
- Link to site survey data
- Document reference points

### Deliverables
- Model in native software format
- Point cloud references
- Coordinate system definition
- Quality assurance documentation

## Applications

Scan-to-BIM is valuable for:
- As-built documentation
- Historic building renovation
- Facility condition assessment
- Retrofit and modernization projects
- Dispute resolution

## Conclusion

Scan-to-BIM bridges the gap between reality and digital models, providing accurate representations of existing conditions for better decision-making and planning.
    `,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
}
