import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection untuk 5 Halaman Pilar (Service Landing Pages).
 * URL: /layanan/[slug]/
 */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    heroImage: z.string().default('/images/placeholder/hero.svg'),
    // Outline section (H2+H3) dari riset
    intro: z.string(),
    sections: z
      .array(
        z.object({
          heading: z.string(),
          body: z.string(),
        })
      )
      .default([]),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .default([]),
    updatedDate: z.coerce.date().optional(),
    sortOrder: z.number().default(99),
  }),
});

/**
 * Collection untuk 30 Artikel Penunjang (E-E-A-T).
 * URL: /artikel/[slug]/
 * Field `pillar` menghubungkan ke pilar induk (strategi silo vertikal).
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    heroImage: z.string().default('/images/placeholder/article.svg'),
    pillar: z.enum([
      'kitchen-set',
      'rumah-subsidi',
      'apartemen',
      'ruang-tamu',
      'interior-kantor',
      'kamar-tidur',
      'komersial', // alias lama untuk interior-kantor
    ]),
    author: z.string().default('Muhammad Zazuli'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // default true agar tidak terindex sebelum konten diisi
    draft: z.boolean().default(true),
  }),
});

export const collections = { services, articles };
