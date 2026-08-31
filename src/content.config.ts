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
    client: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    technologies: z.array(z.string()),
    heroMedia: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    year: z.number(),
    order: z.number(),
    visual: z.enum(['orbit', 'field', 'signal']),
    tone: z.enum(['orange', 'blue', 'paper']),
  }),
});

export const collections = { services, projects };
