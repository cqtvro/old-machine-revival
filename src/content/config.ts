import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    categoryName: z.string(),
    date: z.string(),
    readTime: z.string(),
    views: z.number(),
    likes: z.number(),
    tags: z.array(z.string()),
    bannerGradient: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
