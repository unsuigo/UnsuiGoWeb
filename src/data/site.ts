export const siteSettings = {
  name: 'UnsuiGo',
  descriptor: 'Unity / XR Development',
  title: 'UnsuiGo — Unity / XR Development',
  description:
    'Independent Unity / XR development for Meta Quest, VR and AR prototypes, interactive applications and existing Unity projects.',
  contactEmail: null as string | null,
  contactLabel: 'Freelance / contract enquiries welcome',
  location: 'Warsaw, Poland / Remote worldwide',
  social: [] as { label: string; href: string }[],
} as const;

export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const hero = {
  eyebrow: 'Independent Unity / XR Development',
  kicker: 'UNSUIGO / DEVELOPMENT',
  headlineLead: 'Unity /',
  headlineAccent: 'XR Development',
  body: 'Building interactive applications and prototypes in Unity — from initial concept to working build.',
  disciplines: ['VR', 'AR', 'Meta Quest', 'Interactive Prototypes', 'C#'],
  availability: 'Available for freelance & contract projects.',
  scrollLabel: 'View Work',
} as const;

export const technicalWork = {
  label: 'Technical range',
  title: 'Additional Technical Experience',
  intro: 'Hands-on work across Unity systems, XR interaction, networking, integrations and gameplay architecture.',
} as const;

export const commercialDevelopment = {
  label: 'Commercial Unity Development',
  title: 'Useful inside an existing codebase.',
  body: 'Worked with existing Unity production codebases, investigating and fixing gameplay and runtime issues, debugging regressions, implementing changes and improving application stability.',
  capabilities: [
    'Existing codebases',
    'Bug fixing',
    'Debugging',
    'Feature implementation',
    'Runtime issues',
    'Regression investigation',
    'Project support',
  ],
  testing: ['NUnit', 'Unity Edit Mode tests', 'Unity Play Mode tests'],
} as const;

export const capabilities = [
  'Unity',
  'C#',
  'Meta Quest',
  'OpenXR',
  'XR Interaction Toolkit',
  'VR Interaction',
  'AR',
  'Gameplay Systems',
  'Rapid Prototyping',
  'Debugging & Optimization',
  'Multiplayer / Networking',
  'REST API Integration',
  'NUnit / Git',
] as const;

export const about = {
  label: 'About',
  title: 'Independent studio. Direct technical collaboration.',
  body: 'UnsuiGo is an independent Unity / XR development studio based in Warsaw, Poland. I work with Unity, C#, Meta Quest and interactive technologies, building prototypes and VR / AR applications while also supporting existing Unity projects.',
  availability: 'Available for remote freelance and contract work.',
} as const;

export const process = [
  { title: 'Define', description: 'Clarify the problem, target hardware and the interaction that needs to work.' },
  { title: 'Prototype', description: 'Build a focused version early enough to test the important technical assumptions.' },
  { title: 'Implement', description: 'Turn the validated direction into maintainable Unity and C# systems.' },
  { title: 'Test & Support', description: 'Debug, profile and refine the build, including work inside an existing project.' },
] as const;

export const contact = {
  eyebrow: 'Available for projects',
  title: 'Have a Unity / XR project?',
  linkLabel: 'Open to new projects',
  responseNote: 'Available for prototypes, existing Unity projects, VR / XR development and short-term production support.',
} as const;

export const footer = {
  note: 'Unity / XR / Meta Quest / Prototypes',
  legal: `© ${new Date().getFullYear()} UnsuiGo Studio`,
} as const;
