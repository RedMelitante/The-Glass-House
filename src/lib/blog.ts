import { getCollection, type CollectionEntry } from 'astro:content';
import { blogIndexData } from '../data/blogIndex.js';

export type Post = CollectionEntry<'blog'>;

export const POSTS_PER_PAGE = 9;

/** Filter chips shown on the blog index, in design order. */
export const FILTER_CATEGORIES = [
  'Shower Enclosure',
  'Custom Glass Installation',
  'Glass Windows',
  'Glass Storefronts',
  'Custom Mirrors',
  'Glass Railings',
];

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Category archive URL — same paths as the old WordPress site. */
export const categoryUrl = (name: string) => (name === 'All' ? '/blog/' : `/category/${slugify(name)}/`);

export const postUrl = (post: Post) => `/${post.id}/`;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

// Card images picked in the design (blog index + home page); other posts use their own hero image.
const FEATURED_IMAGE = '/images/frameless-glass-shower-with-marble-look-tile-and-built-in.webp';
const designImages = new Map<string, string>([
  ['Wet Room vs. Traditional Shower: Which Fits Your Bathroom?', FEATURED_IMAGE],
  ...blogIndexData().allPosts.map((p: { title: string; img: string }) => [p.title, p.img] as [string, string]),
]);

export const FALLBACK_IMAGE = FEATURED_IMAGE;

export function postImage(post: Post): string {
  return designImages.get(post.data.title) ?? post.data.heroImage ?? FALLBACK_IMAGE;
}

export const primaryCategory = (post: Post) =>
  post.data.categories.find((c) => FILTER_CATEGORIES.includes(c)) ?? post.data.categories[0] ?? 'Blog';

export const readTime = (post: Post) => `${post.data.readingTime ?? 4} min read`;

export const shortDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export const longDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** Compact card data used by the blog grid, related posts and the client-side search index. */
export function card(post: Post) {
  return {
    title: post.data.title,
    href: postUrl(post),
    img: postImage(post),
    cat: primaryCategory(post),
    date: shortDate(post.data.pubDate),
    read: readTime(post),
    text: post.data.description,
  };
}
export type Card = ReturnType<typeof card>;
