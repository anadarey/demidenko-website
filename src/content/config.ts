import { defineCollection, z } from 'astro:content';

const sangamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    desc: z.string(),
    order: z.number().default(0),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Hero (добавляем, так как они есть в файле home.md)
    hero_title_left: z.string().optional(),
    hero_title_right: z.string().optional(),
    hero_subtitle: z.string().optional(),
    hero_desc: z.string().optional(),

    // About
    about_title: z.string(),
    about_text: z.string(),
    about_image: z.string(),

    // Projects (заголовок и подзаголовок секции)
    projects_heading: z.string(),
    projects_sub: z.string(),
    
    // Список проектов (МАССИВ ОБЪЕКТОВ)
    projects_list: z.array(z.object({
      title: z.string(),
      type: z.string(),
      desc: z.string(),
      link: z.string(),
      is_live: z.boolean(),
    })), // <-- ВАЖНО: Закрываем массив проектов здесь!

    // Архив проектов (Теперь это отдельное поле, не внутри проектов)
    archive_heading: z.string().optional(),
    archive_list: z.array(z.object({
      name: z.string(),
      link: z.string().optional().nullable(),
    })).optional(),

    // Services
    services_heading: z.string(),
    services_sub: z.string(),
    services_list: z.array(z.object({
      title: z.string(),
      desc: z.string(),
    })),
  }),
});

export const collections = {
  'sangam': sangamCollection,
  'pages': pagesCollection,
};