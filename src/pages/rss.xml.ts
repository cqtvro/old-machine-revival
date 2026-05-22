import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: '老机复活',
    description: '旧电脑、Daphile 数播、Hi-Fi 反玄学与低成本硬件改造手记。',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
    })),
  });
}
