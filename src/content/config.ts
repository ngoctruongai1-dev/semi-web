import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		sourceUrl: z.string().optional(),
		category: z.string(),
		subcategory: z.string().optional(),
		order: z.number(),
		flagship: z.boolean().optional().default(false),
		widget: z.string().optional(),
	}),
});

export const collections = { articles };
