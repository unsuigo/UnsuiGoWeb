import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    category: z.string(),
    capabilities: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    type: z.string(),
    status: z.string(),
    section: z.enum(['selected', 'technical']),
    description: z.string(),
    services: z.array(z.string()),
    technologies: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    technicalWork: z.array(z.string()).default([]),
    heroMedia: z.string().optional(),
    placeholderKind: z.enum(['VIDEO PLACEHOLDER', 'IMAGE PLACEHOLDER', 'IMAGE / VIDEO PLACEHOLDER']).optional(),
    mediaAspect: z.enum(['landscape', 'portrait']).default('landscape'),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number(),
    visual: z.enum(['orbit', 'field', 'signal']),
    tone: z.enum(['orange', 'blue', 'paper']),
  }),
});

export const collections = { services, projects };
