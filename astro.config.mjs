import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// TODO: thay "your-username" bằng username GitHub thật trước khi deploy lần đầu
// (repo đã chốt tên là "semi-web", public — xem TASKS.md Task 26).
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/semi-web',
  integrations: [mdx(), svelte(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
