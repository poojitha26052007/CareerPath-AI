// Backend Career Knowledge Base, Skill Normalizer, and Dynamic Career Match Engine

const CAREER_DATABASE = {
  'Software Developer': {
    title: 'Software Developer',
    icon: '💻',
    category: 'Engineering',
    description:
      'Design, build, test, and maintain robust software applications and scalable systems.',
    primaryBranches: ['CSE', 'IT', 'AIML', 'ECE'],
    secondaryBranches: ['EEE', 'MECH', 'CIVIL', 'Other'],
    domainKeywords: [
      'software',
      'coding',
      'programming',
      'development',
      'algorithms',
      'dsa',
      'system design',
      'backend',
      'full stack',
      'apps',
    ],
    requiredSkills: [
      { name: 'Data Structures & Algorithms', priority: 'High', weight: 3 },
      { name: 'Python', priority: 'High', weight: 3 },
      { name: 'Java / C++', priority: 'High', weight: 3 },
      { name: 'Object-Oriented Programming', priority: 'High', weight: 3 },
      { name: 'SQL', priority: 'Medium', weight: 2 },
      { name: 'Git & GitHub', priority: 'Medium', weight: 2 },
      { name: 'System Design Basics', priority: 'Medium', weight: 2 },
      { name: 'Unit Testing & Debugging', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Docker', 'REST APIs', 'Linux', 'CI/CD'],
    roadmap: [
      { id: 1, name: 'Programming Fundamentals', icon: '💻', duration: '3 weeks' },
      { id: 2, name: 'Data Structures & Algorithms', icon: '⚡', duration: '4 weeks' },
      { id: 3, name: 'Object-Oriented Programming', icon: '🧱', duration: '2 weeks' },
      { id: 4, name: 'SQL & Database Management', icon: '🗄️', duration: '2 weeks' },
      { id: 5, name: 'Git & GitHub Workflow', icon: '🔧', duration: '1 week' },
      { id: 6, name: 'System Design Basics & APIs', icon: '📐', duration: '3 weeks' },
      { id: 7, name: 'Unit Testing & Debugging', icon: '🧪', duration: '2 weeks' },
      { id: 8, name: 'Software Engineering Project', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'AI / ML Engineer': {
    title: 'AI / ML Engineer',
    icon: '🤖',
    category: 'Artificial Intelligence',
    description:
      'Build intelligent models and machine learning pipelines to solve complex predictive problems.',
    primaryBranches: ['AIML', 'CSE', 'IT', 'ECE'],
    secondaryBranches: ['EEE', 'MECH', 'CIVIL', 'Other'],
    domainKeywords: [
      'ai',
      'ml',
      'artificial intelligence',
      'machine learning',
      'deep learning',
      'neural networks',
      'nlp',
      'computer vision',
      'data science',
    ],
    requiredSkills: [
      { name: 'Python', priority: 'High', weight: 3 },
      { name: 'NumPy & Pandas', priority: 'High', weight: 3 },
      { name: 'Machine Learning', priority: 'High', weight: 3 },
      { name: 'Statistics & Probability', priority: 'High', weight: 3 },
      { name: 'Deep Learning', priority: 'Medium', weight: 2 },
      { name: 'SQL', priority: 'Medium', weight: 2 },
      { name: 'Git & GitHub', priority: 'Medium', weight: 2 },
      { name: 'MLOps & Model Deployment', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'FastAPI'],
    roadmap: [
      { id: 1, name: 'Python Fundamentals', icon: '🐍', duration: '3 weeks' },
      { id: 2, name: 'NumPy & Matrix Computing', icon: '🔢', duration: '1 week' },
      { id: 3, name: 'Pandas & Data Wrangling', icon: '🐼', duration: '2 weeks' },
      { id: 4, name: 'Statistics & Probability', icon: '📊', duration: '3 weeks' },
      { id: 5, name: 'SQL & Data Extraction', icon: '🗄️', duration: '2 weeks' },
      { id: 6, name: 'Machine Learning Algorithms', icon: '🤖', duration: '4 weeks' },
      { id: 7, name: 'Deep Learning & Neural Networks', icon: '🧠', duration: '3 weeks' },
      { id: 8, name: 'AI Project & Model Deployment', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'Data Scientist': {
    title: 'Data Scientist',
    icon: '🔬',
    category: 'Data & Analytics',
    description:
      'Extract actionable insights and predictive signals from vast data using statistics and machine learning.',
    primaryBranches: ['CSE', 'AIML', 'IT', 'ECE'],
    secondaryBranches: ['EEE', 'MECH', 'CIVIL', 'Other'],
    domainKeywords: [
      'data science',
      'data scientist',
      'analytics',
      'statistics',
      'modeling',
      'machine learning',
      'big data',
      'predictive',
      'research',
    ],
    requiredSkills: [
      { name: 'Python', priority: 'High', weight: 3 },
      { name: 'Statistics & Probability', priority: 'High', weight: 3 },
      { name: 'SQL', priority: 'High', weight: 3 },
      { name: 'NumPy & Pandas', priority: 'High', weight: 3 },
      { name: 'Machine Learning', priority: 'Medium', weight: 2 },
      { name: 'Data Visualization', priority: 'Medium', weight: 2 },
      { name: 'Feature Engineering', priority: 'Medium', weight: 2 },
      { name: 'Git & GitHub', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Scikit-Learn', 'Seaborn', 'Matplotlib', 'Jupyter', 'A/B Testing'],
    roadmap: [
      { id: 1, name: 'Python for Data Science', icon: '🐍', duration: '3 weeks' },
      { id: 2, name: 'SQL & Database Querying', icon: '🗄️', duration: '2 weeks' },
      { id: 3, name: 'Probability & Applied Statistics', icon: '📊', duration: '3 weeks' },
      { id: 4, name: 'Data Wrangling with Pandas', icon: '🐼', duration: '2 weeks' },
      { id: 5, name: 'Exploratory Data Analysis (EDA)', icon: '📈', duration: '2 weeks' },
      { id: 6, name: 'Supervised & Unsupervised ML', icon: '🤖', duration: '4 weeks' },
      { id: 7, name: 'Model Validation & Tuning', icon: '🎯', duration: '2 weeks' },
      { id: 8, name: 'Data Science Capstone Project', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'Data Analyst': {
    title: 'Data Analyst',
    icon: '📊',
    category: 'Data & Analytics',
    description:
      'Turn raw business data into actionable dashboards, reports, and strategic insights.',
    primaryBranches: ['CSE', 'IT', 'AIML', 'ECE', 'EEE', 'MECH', 'CIVIL', 'Other'],
    secondaryBranches: [],
    domainKeywords: [
      'data analyst',
      'analytics',
      'business intelligence',
      'bi',
      'sql',
      'excel',
      'power bi',
      'tableau',
      'reporting',
      'visualization',
      'insights',
    ],
    requiredSkills: [
      { name: 'SQL', priority: 'High', weight: 3 },
      { name: 'Advanced Excel', priority: 'High', weight: 3 },
      { name: 'Power BI / Tableau', priority: 'High', weight: 3 },
      { name: 'Python', priority: 'Medium', weight: 2 },
      { name: 'Data Visualization', priority: 'Medium', weight: 2 },
      { name: 'Statistics', priority: 'Medium', weight: 2 },
      { name: 'Data Cleaning', priority: 'Medium', weight: 2 },
      { name: 'Business Reporting', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Pandas', 'EDA', 'DAX', 'Storytelling'],
    roadmap: [
      { id: 1, name: 'Advanced Excel & Pivot Tables', icon: '📑', duration: '2 weeks' },
      { id: 2, name: 'SQL for Data Analysis', icon: '🗄️', duration: '3 weeks' },
      { id: 3, name: 'Python for Analysts', icon: '🐍', duration: '2 weeks' },
      { id: 4, name: 'Data Wrangling with Pandas', icon: '🐼', duration: '2 weeks' },
      { id: 5, name: 'Business Statistics & KPIs', icon: '📊', duration: '2 weeks' },
      { id: 6, name: 'Power BI Dashboard Design', icon: '📉', duration: '3 weeks' },
      { id: 7, name: 'Tableau & Data Storytelling', icon: '🎨', duration: '2 weeks' },
      { id: 8, name: 'End-to-End Analytics Project', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'Web Developer': {
    title: 'Web Developer',
    icon: '🌐',
    category: 'Engineering',
    description:
      'Create responsive, performant user interfaces and dynamic full-stack web applications.',
    primaryBranches: ['CSE', 'IT', 'AIML', 'ECE', 'EEE', 'Other'],
    secondaryBranches: ['MECH', 'CIVIL'],
    domainKeywords: [
      'web',
      'web development',
      'frontend',
      'backend',
      'full stack',
      'react',
      'javascript',
      'html',
      'css',
      'node',
      'express',
      'ui',
    ],
    requiredSkills: [
      { name: 'HTML & CSS', priority: 'High', weight: 3 },
      { name: 'JavaScript', priority: 'High', weight: 3 },
      { name: 'React.js', priority: 'High', weight: 3 },
      { name: 'Node.js & Express.js', priority: 'High', weight: 3 },
      { name: 'Git & GitHub', priority: 'Medium', weight: 2 },
      { name: 'REST APIs', priority: 'Medium', weight: 2 },
      { name: 'Database (SQL / MongoDB)', priority: 'Medium', weight: 2 },
      { name: 'Responsive Web Design', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Tailwind CSS', 'TypeScript', 'Redux', 'Next.js'],
    roadmap: [
      { id: 1, name: 'HTML5 & Modern CSS3', icon: '🎨', duration: '2 weeks' },
      { id: 2, name: 'Modern JavaScript (ES6+)', icon: '📜', duration: '3 weeks' },
      { id: 3, name: 'Git & GitHub Workflow', icon: '🔧', duration: '1 week' },
      { id: 4, name: 'React.js Fundamentals', icon: '⚛️', duration: '3 weeks' },
      { id: 5, name: 'Node.js & Express APIs', icon: '🟢', duration: '3 weeks' },
      { id: 6, name: 'Database Integration (SQL / Mongo)', icon: '🗄️', duration: '2 weeks' },
      { id: 7, name: 'Auth, Security & Deployment', icon: '🔒', duration: '2 weeks' },
      { id: 8, name: 'Full Stack Web Project', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'Cloud Engineer': {
    title: 'Cloud Engineer',
    icon: '☁️',
    category: 'Cloud & Infrastructure',
    description:
      'Architect, provision, automate, and maintain resilient cloud infrastructure and DevOps pipelines.',
    primaryBranches: ['CSE', 'IT', 'ECE', 'EEE', 'AIML'],
    secondaryBranches: ['MECH', 'CIVIL', 'Other'],
    domainKeywords: [
      'cloud',
      'devops',
      'aws',
      'azure',
      'gcp',
      'infrastructure',
      'docker',
      'kubernetes',
      'linux',
      'ci/cd',
      'networking',
      'servers',
    ],
    requiredSkills: [
      { name: 'Linux & Bash Scripting', priority: 'High', weight: 3 },
      { name: 'Cloud Fundamentals (AWS/Azure)', priority: 'High', weight: 3 },
      { name: 'Docker & Containers', priority: 'High', weight: 3 },
      { name: 'Computer Networking', priority: 'High', weight: 3 },
      { name: 'Kubernetes', priority: 'Medium', weight: 2 },
      { name: 'CI/CD Pipelines', priority: 'Medium', weight: 2 },
      { name: 'Infrastructure as Code (Terraform)', priority: 'Medium', weight: 2 },
      { name: 'Git & GitHub', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Python Scripting', 'Monitoring (Prometheus/Grafana)', 'IAM Security'],
    roadmap: [
      { id: 1, name: 'Linux & Shell Scripting', icon: '🐧', duration: '2 weeks' },
      { id: 2, name: 'Computer Networking Fundamentals', icon: '🌐', duration: '2 weeks' },
      { id: 3, name: 'AWS / Cloud Architecture', icon: '☁️', duration: '3 weeks' },
      { id: 4, name: 'Docker & Containerization', icon: '🐳', duration: '2 weeks' },
      { id: 5, name: 'Kubernetes Orchestration', icon: '☸️', duration: '3 weeks' },
      { id: 6, name: 'Infrastructure as Code (Terraform)', icon: '🏗️', duration: '2 weeks' },
      { id: 7, name: 'CI/CD Automation & GitHub Actions', icon: '🔄', duration: '2 weeks' },
      { id: 8, name: 'Scalable Cloud Capstone Project', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'Cybersecurity': {
    title: 'Cybersecurity',
    icon: '🛡️',
    category: 'Security',
    description:
      'Protect networks, applications, systems, and sensitive data from cyber threats and vulnerabilities.',
    primaryBranches: ['CSE', 'IT', 'ECE', 'EEE'],
    secondaryBranches: ['AIML', 'MECH', 'CIVIL', 'Other'],
    domainKeywords: [
      'security',
      'cybersecurity',
      'cyber',
      'ethical hacking',
      'penetration testing',
      'infosec',
      'network security',
      'cryptography',
      'owasp',
      'soc',
      'forensics',
    ],
    requiredSkills: [
      { name: 'Computer Networking & Protocols', priority: 'High', weight: 3 },
      { name: 'Linux Administration & Security', priority: 'High', weight: 3 },
      { name: 'Web Application Security (OWASP)', priority: 'High', weight: 3 },
      { name: 'Cryptography Basics', priority: 'Medium', weight: 2 },
      { name: 'Network Traffic Analysis (Wireshark)', priority: 'Medium', weight: 2 },
      { name: 'Vulnerability Scanning', priority: 'Medium', weight: 2 },
      { name: 'Ethical Hacking Basics', priority: 'Medium', weight: 2 },
      { name: 'Git & Python Scripting', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Nmap', 'Burp Suite', 'Metasploit', 'SIEM & SOC Basics'],
    roadmap: [
      { id: 1, name: 'Networking & Protocol Security', icon: '🌐', duration: '2 weeks' },
      { id: 2, name: 'Linux Administration & Hardening', icon: '🐧', duration: '2 weeks' },
      { id: 3, name: 'Security Principles & Cryptography', icon: '🔐', duration: '2 weeks' },
      { id: 4, name: 'Reconnaissance & Nmap Scanning', icon: '🔍', duration: '2 weeks' },
      { id: 5, name: 'Web Security & OWASP Top 10', icon: '🛡️', duration: '3 weeks' },
      { id: 6, name: 'Network Traffic Analysis (Wireshark)', icon: '📡', duration: '2 weeks' },
      { id: 7, name: 'Incident Response & SIEM Basics', icon: '🚨', duration: '2 weeks' },
      { id: 8, name: 'Security Audit & Pen-Test Project', icon: '🚀', duration: '4 weeks' },
    ],
  },

  'UI/UX Designer': {
    title: 'UI/UX Designer',
    icon: '🎨',
    category: 'Design & Product',
    description:
      'Design intuitive, visually delightful user interfaces and empathetic digital user experiences.',
    primaryBranches: ['CSE', 'IT', 'AIML', 'ECE', 'MECH', 'CIVIL', 'EEE', 'Other'],
    secondaryBranches: [],
    domainKeywords: [
      'ui',
      'ux',
      'ui/ux',
      'design',
      'figma',
      'wireframing',
      'prototyping',
      'user research',
      'graphic design',
      'product design',
      'interaction',
    ],
    requiredSkills: [
      { name: 'Figma & Interactive Prototyping', priority: 'High', weight: 3 },
      { name: 'User Research & Personas', priority: 'High', weight: 3 },
      { name: 'Wireframing & Information Architecture', priority: 'High', weight: 3 },
      { name: 'Visual Design & Typography', priority: 'High', weight: 3 },
      { name: 'Design Systems & Components', priority: 'Medium', weight: 2 },
      { name: 'Usability Testing & Heuristics', priority: 'Medium', weight: 2 },
      { name: 'HTML & CSS Basics', priority: 'Low', weight: 1 },
      { name: 'Design Storytelling', priority: 'Low', weight: 1 },
    ],
    optionalSkills: ['Adobe XD', 'Micro-interactions', 'Accessibility (WCAG)', 'User Journey Mapping'],
    roadmap: [
      { id: 1, name: 'UI/UX Design Principles', icon: '💡', duration: '2 weeks' },
      { id: 2, name: 'User Research & Empathy Mapping', icon: '👥', duration: '2 weeks' },
      { id: 3, name: 'Information Architecture & Wireframes', icon: '📝', duration: '2 weeks' },
      { id: 4, name: 'Figma Mastery & Prototyping', icon: '🎨', duration: '3 weeks' },
      { id: 5, name: 'Visual Design, Color & Typography', icon: '✨', duration: '2 weeks' },
      { id: 6, name: 'Building Scalable Design Systems', icon: '📐', duration: '2 weeks' },
      { id: 7, name: 'Usability Testing & Accessibility', icon: '🧪', duration: '2 weeks' },
      { id: 8, name: 'End-to-End Product Case Study', icon: '🚀', duration: '4 weeks' },
    ],
  },
}

const SKILL_ALIASES = {
  js: 'javascript',
  javascript: 'javascript',
  ts: 'typescript',
  typescript: 'typescript',
  py: 'python',
  python: 'python',
  'python fundamentals': 'python',
  react: 'react.js',
  'react.js': 'react.js',
  reactjs: 'react.js',
  node: 'node.js',
  'node.js': 'node.js',
  nodejs: 'node.js',
  express: 'node.js & express.js',
  'express.js': 'node.js & express.js',
  'node.js & express.js': 'node.js & express.js',
  'node.js & express': 'node.js & express.js',
  html: 'html & css',
  css: 'html & css',
  'html & css': 'html & css',
  'html/css': 'html & css',
  git: 'git & github',
  github: 'git & github',
  'git & github': 'git & github',
  dsa: 'data structures & algorithms',
  'data structures': 'data structures & algorithms',
  algorithms: 'data structures & algorithms',
  oop: 'object-oriented programming',
  oops: 'object-oriented programming',
  sql: 'sql',
  mongo: 'database (sql / mongodb)',
  mongodb: 'database (sql / mongodb)',
  ml: 'machine learning',
  'machine learning': 'machine learning',
  ai: 'artificial intelligence',
  'artificial intelligence': 'artificial intelligence',
  dl: 'deep learning',
  stats: 'statistics & probability',
  statistics: 'statistics & probability',
  numpy: 'numpy & pandas',
  pandas: 'numpy & pandas',
  excel: 'advanced excel',
  'power bi': 'power bi / tableau',
  powerbi: 'power bi / tableau',
  tableau: 'power bi / tableau',
  figma: 'figma & interactive prototyping',
  'ui/ux': 'ui/ux design principles',
  docker: 'docker & containers',
  k8s: 'kubernetes',
  kubernetes: 'kubernetes',
  aws: 'cloud fundamentals (aws/azure)',
  azure: 'cloud fundamentals (aws/azure)',
  linux: 'linux & bash scripting',
  terraform: 'infrastructure as code (terraform)',
  'ci/cd': 'ci/cd pipelines',
  networking: 'computer networking',
  wireshark: 'network traffic analysis (wireshark)',
  owasp: 'web application security (owasp)',
  'ethical hacking': 'ethical hacking basics',
  java: 'java / c++',
  'c++': 'java / c++',
  cpp: 'java / c++',
  'system design': 'system design basics',
  'rest apis': 'rest apis',
  api: 'rest apis',
}

function normalizeSkills(rawSkillsInput) {
  if (!rawSkillsInput) return []
  let rawList = []
  if (Array.isArray(rawSkillsInput)) {
    rawList = rawSkillsInput
  } else if (typeof rawSkillsInput === 'string') {
    rawList = rawSkillsInput
      .split(/[,;\n/]+/)
      .map((s) => s.trim())
      .filter((s) => s && s.toLowerCase() !== 'none' && s.toLowerCase() !== 'nil')
  }

  const normalizedSet = new Set()
  for (const raw of rawList) {
    const cleaned = raw.toLowerCase().trim()
    if (!cleaned) continue
    if (SKILL_ALIASES[cleaned]) {
      normalizedSet.add(SKILL_ALIASES[cleaned])
      continue
    }
    let matched = false
    for (const [alias, canonical] of Object.entries(SKILL_ALIASES)) {
      if (cleaned === alias || cleaned.includes(alias) || alias.includes(cleaned)) {
        normalizedSet.add(canonical)
        matched = true
        break
      }
    }
    if (!matched) normalizedSet.add(cleaned)
  }
  return Array.from(normalizedSet)
}

function isSkillMatched(requiredSkillName, normalizedUserSkills) {
  const reqLower = requiredSkillName.toLowerCase()
  const reqCanonical = SKILL_ALIASES[reqLower] || reqLower

  const STOP_WORDS = new Set(['and', '&', 'for', 'with', 'the', 'basics', 'fundamentals', 'concepts', 'principles'])
  const reqWords = reqLower.split(/[\s&/+,]+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w))

  for (const userSkill of normalizedUserSkills) {
    const userLower = userSkill.toLowerCase()
    const userCanonical = SKILL_ALIASES[userLower] || userLower

    if (
      userLower === reqLower ||
      userCanonical === reqCanonical ||
      userLower.includes(reqLower) ||
      reqLower.includes(userLower) ||
      userCanonical.includes(reqCanonical) ||
      reqCanonical.includes(userCanonical)
    ) {
      return true
    }

    const userWords = userLower.split(/[\s&/+,]+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w))
    const hasCommonWord = reqWords.some((rw) => userWords.includes(rw))
    if (hasCommonWord && (userWords.length <= 2 || reqWords.length <= 2)) {
      return true
    }
  }
  return false
}

function analyzeCareerMatch(careerKey, studentProfile = {}, completedSkills = []) {
  const careerData = CAREER_DATABASE[careerKey]
  if (!careerData) return null

  const rawUserSkills = studentProfile.skills || ''
  const userNormalizedSkills = normalizeSkills(rawUserSkills)
  const normalizedCompleted = normalizeSkills(completedSkills)
  const allActiveSkills = Array.from(new Set([...userNormalizedSkills, ...normalizedCompleted]))

  // 1. Skill Match (60%)
  const requiredSkills = careerData.requiredSkills || []
  let totalSkillWeight = 0
  let matchedSkillWeight = 0
  const matchedSkillsList = []
  const missingSkillsList = []

  for (const req of requiredSkills) {
    const weight = req.weight || 2
    totalSkillWeight += weight
    if (isSkillMatched(req.name, allActiveSkills)) {
      matchedSkillWeight += weight
      matchedSkillsList.push(req.name)
    } else {
      missingSkillsList.push({
        name: req.name,
        priority: req.priority || 'Medium',
      })
    }
  }

  const skillCoverageFraction = totalSkillWeight > 0 ? matchedSkillWeight / totalSkillWeight : 0
  const skillScore = Math.round(skillCoverageFraction * 60)

  // 2. Branch & Academic Alignment (15%)
  const userBranch = (studentProfile.branch || '').toUpperCase()
  let branchScore = 6
  if (careerData.primaryBranches.some((b) => b.toUpperCase() === userBranch)) {
    branchScore = 12
  } else if (careerData.secondaryBranches.some((b) => b.toUpperCase() === userBranch)) {
    branchScore = 9
  }

  const cgpaVal = parseFloat(studentProfile.cgpa)
  if (!isNaN(cgpaVal) && cgpaVal > 0) {
    if (cgpaVal >= 8.5) branchScore += 3
    else if (cgpaVal >= 7.5) branchScore += 2
    else if (cgpaVal >= 6.5) branchScore += 1
  } else {
    branchScore += 1
  }
  const academicScore = Math.min(15, branchScore)

  // 3. Interest Alignment (15%)
  const rawInterests = (studentProfile.interests || studentProfile.interest || '').toLowerCase()
  let interestScore = 4
  if (rawInterests) {
    let interestHits = 0
    for (const kw of careerData.domainKeywords) {
      if (rawInterests.includes(kw)) interestHits++
    }
    if (interestHits >= 2) interestScore = 15
    else if (interestHits === 1) interestScore = 11
    else interestScore = 7
  }
  const finalizedInterestScore = Math.min(15, interestScore)

  // 4. Projects & Experience (10%)
  const totalRoadmapCount = careerData.roadmap ? careerData.roadmap.length : 8
  const roadmapSkillNames = (careerData.roadmap || []).map((r) => r.name)
  const validCompletedForCareer = roadmapSkillNames.filter((name) =>
    Array.isArray(completedSkills) && completedSkills.includes(name)
  )
  const completedCount = Math.min(validCompletedForCareer.length, totalRoadmapCount)
  const progressRatio = totalRoadmapCount > 0 ? completedCount / totalRoadmapCount : 0
  const projectScore = Math.min(10, Math.round(3 + progressRatio * 7))

  const totalMatchScore = Math.min(
    100,
    Math.max(0, skillScore + academicScore + finalizedInterestScore + projectScore)
  )

  return {
    careerKey,
    title: careerData.title,
    icon: careerData.icon,
    category: careerData.category,
    description: careerData.description,
    matchPercentage: totalMatchScore,
    scoreBreakdown: {
      skillScore,
      maxSkillScore: 60,
      academicScore,
      maxAcademicScore: 15,
      interestScore: finalizedInterestScore,
      maxInterestScore: 15,
      projectScore,
      maxProjectScore: 10,
    },
    matchedSkills: matchedSkillsList,
    missingSkills: missingSkillsList,
    requiredSkills: requiredSkills.map((r) => r.name),
    roadmap: careerData.roadmap,
  }
}

function getCompleteCareerEvaluation(studentProfile = {}, completedSkills = []) {
  let selectedGoal = studentProfile.careerGoal || ''
  const isUndecided =
    !selectedGoal ||
    selectedGoal === 'Not Sure' ||
    selectedGoal === "I don't know yet" ||
    selectedGoal === "🤷 I don't know yet" ||
    selectedGoal === 'Undecided'

  const allEvaluations = Object.keys(CAREER_DATABASE)
    .map((key) => analyzeCareerMatch(key, studentProfile, completedSkills))
    .filter(Boolean)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)

  let primaryEvaluation = null
  if (!isUndecided && CAREER_DATABASE[selectedGoal]) {
    primaryEvaluation = analyzeCareerMatch(selectedGoal, studentProfile, completedSkills)
  }
  if (!primaryEvaluation) {
    primaryEvaluation = allEvaluations[0] || analyzeCareerMatch('Software Developer', studentProfile, completedSkills)
  }

  const alternativeCareers = allEvaluations
    .filter((evalItem) => evalItem.careerKey !== primaryEvaluation.careerKey)
    .slice(0, 3)

  return {
    isUndecided,
    targetGoal: isUndecided ? primaryEvaluation.title : selectedGoal,
    primary: primaryEvaluation,
    alternatives: alternativeCareers,
    allRanked: allEvaluations,
  }
}

module.exports = {
  CAREER_DATABASE,
  normalizeSkills,
  analyzeCareerMatch,
  getCompleteCareerEvaluation,
}
