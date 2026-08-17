import { getCollection, type CollectionEntry } from "astro:content";
import { withBase } from "./url";

export type Article = CollectionEntry<"articles">;

export async function getAllArticles(): Promise<Article[]> {
	return getCollection("articles");
}

export async function getArticlesFor(categorySlug: string, subcategorySlug?: string): Promise<Article[]> {
	const all = await getAllArticles();
	return all
		.filter((a) => a.data.category === categorySlug && a.data.subcategory === subcategorySlug)
		.sort((a, b) => a.data.order - b.data.order);
}

export function articleHref(entry: Article): string {
	const { category, subcategory } = entry.data;
	const slugParts = entry.slug.split("/");
	const articleSlug = slugParts[slugParts.length - 1];
	return withBase(subcategory ? `/${category}/${subcategory}/${articleSlug}/` : `/${category}/${articleSlug}/`);
}

export function categoryHref(categorySlug: string, subcategorySlug?: string): string {
	return withBase(subcategorySlug ? `/${categorySlug}/${subcategorySlug}/` : `/${categorySlug}/`);
}
