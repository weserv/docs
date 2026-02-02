import { createContentLoader } from 'vitepress';

interface NewsItem {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  excerpt: string | undefined;
}

declare const data: NewsItem[];
export { data };

export default createContentLoader('news/*/**/*.md', {
  transform(raw): NewsItem[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        excerpt: frontmatter.excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time);
  }
});

function formatDate(raw: string): NewsItem['date'] {
  const date = new Date(raw);
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
}
