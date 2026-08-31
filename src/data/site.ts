export const siteSettings = {
  name: 'PLAYFORM',
  descriptor: 'Interactive Software Studio',
  title: 'PLAYFORM — Interactive Software Studio',
  description:
    'PLAYFORM creates games, XR experiences, interactive installations and purposeful digital products.',
  email: 'hello@playform.studio',
  location: 'Europe / Working worldwide',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
} as const;

export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Studio', href: '/#studio' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const hero = {
  eyebrow: 'Independent interactive software studio',
  headline: 'We build things people interact with.',
  disciplines: ['Games', 'XR', 'Interactive experiences', 'Digital products'],
  scrollLabel: 'Selected work',
} as const;

export const capabilities = [
  'Unity',
  'Gameplay systems',
  'OpenXR',
  'VR interaction',
  'Realtime 3D',
  'Interactive installations',
  'Touch interfaces',
  'Web experiences',
  'API integration',
  'Rapid prototyping',
] as const;

export const philosophy = {
  label: 'How we think',
  title: 'An idea is only interesting once you can interact with it.',
  body: 'We work from first question to working experience—finding the core behavior early, proving it through prototypes, then refining every detail until the technology disappears into the experience.',
} as const;

export const process = [
  { title: 'Discover', description: 'Define the audience, the moment and what the interaction needs to make possible.' },
  { title: 'Prototype', description: 'Build the smallest honest version and learn from something people can actually use.' },
  { title: 'Build', description: 'Turn the proven direction into a robust system, with craft in the code and interface.' },
  { title: 'Refine', description: 'Tune motion, feedback, performance and the hundred details that make it feel right.' },
  { title: 'Launch', description: 'Ship with confidence, measure the real experience and support what comes next.' },
] as const;

export const contact = {
  eyebrow: 'Start a project',
  title: 'Have something interactive in mind?',
  linkLabel: 'Let’s build it',
  responseNote: 'Tell us what you are imagining, where it lives, and what should happen when someone touches it.',
} as const;

export const footer = {
  note: 'Games / XR / Experiences / Products',
  legal: `© ${new Date().getFullYear()} PLAYFORM Studio`,
} as const;
