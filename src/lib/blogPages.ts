import { POSTS_PER_PAGE, card, getPosts, type Post } from './blog';

/**
 * Listing pages for a set of posts: page 1 features the newest post above a grid of the next nine;
 * later pages are plain grids of nine.
 */
export function listingPages(posts: Post[], base: string) {
  const [first, ...rest] = posts;
  const last = Math.max(1, Math.ceil(rest.length / POSTS_PER_PAGE));
  const pageUrl = (n: number) => (n === 1 ? base : `${base}page/${n}/`);
  return Array.from({ length: last }, (_, i) => ({
    page: i + 1,
    featured: i === 0 && first ? { ...card(first), author: first.data.author } : undefined,
    posts: rest.slice(i * POSTS_PER_PAGE, (i + 1) * POSTS_PER_PAGE).map(card),
    last,
    pageUrl,
  }));
}

export async function searchIndex() {
  return (await getPosts()).map(card);
}
