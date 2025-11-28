/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import { INewsArticle, NewsCategory } from "../types/INewsArticle";

const mockNewsArticles: INewsArticle[] = [
  {
    id: "1",
    title: "Breaking: New AI Technology Revolutionizes Healthcare",
    description:
      "Researchers have developed an AI system that can diagnose diseases with 99% accuracy.",
    content:
      "In a groundbreaking development, researchers at a leading university have created an artificial intelligence system that can diagnose various diseases with unprecedented accuracy. The system uses advanced machine learning algorithms to analyze medical images and patient data, providing doctors with reliable diagnostic support.",
    author: "Dr. Sarah Johnson",
    publishedAt: "2025-11-28T10:00:00Z",
    imageUrl: "https://picsum.photos/400/300?random=1",
    category: "technology",
    source: "Tech News Daily",
    url: "https://example.com/news/1",
  },
  {
    id: "2",
    title: "Championship Final: Historic Victory for Local Team",
    description: "Local team wins championship after 20 years of trying.",
    content:
      "After two decades of near misses and heartbreaking defeats, the local team has finally clinched the championship title. The victory came in dramatic fashion with a last-minute goal that sent fans into wild celebrations.",
    author: "Mike Torres",
    publishedAt: "2025-11-27T18:30:00Z",
    imageUrl: "https://picsum.photos/400/300?random=2",
    category: "sports",
    source: "Sports Weekly",
    url: "https://example.com/news/2",
  },
  {
    id: "3",
    title: "Stock Market Reaches All-Time High",
    description: "Major indices close at record levels amid economic optimism.",
    content:
      "The stock market continued its impressive rally today, with major indices reaching all-time highs. Analysts attribute the surge to strong corporate earnings and positive economic indicators.",
    author: "Jennifer Lee",
    publishedAt: "2025-11-27T16:00:00Z",
    imageUrl: "https://picsum.photos/400/300?random=3",
    category: "business",
    source: "Financial Times",
    url: "https://example.com/news/3",
  },
  {
    id: "4",
    title: "New Movie Breaks Box Office Records",
    description: "Latest blockbuster shatters opening weekend expectations.",
    content:
      "The highly anticipated movie has exceeded all expectations, breaking multiple box office records in its opening weekend. Critics and audiences alike have praised the film for its stunning visuals and compelling storyline.",
    author: "Tom Martinez",
    publishedAt: "2025-11-26T12:00:00Z",
    imageUrl: "https://picsum.photos/400/300?random=4",
    category: "entertainment",
    source: "Entertainment Weekly",
    url: "https://example.com/news/4",
  },
  {
    id: "5",
    title: "Study Reveals Benefits of Mediterranean Diet",
    description:
      "New research shows significant health improvements with Mediterranean eating patterns.",
    content:
      "A comprehensive study has found that following a Mediterranean diet can significantly reduce the risk of heart disease and improve overall health. The research followed thousands of participants over a decade.",
    author: "Dr. Emily Chen",
    publishedAt: "2025-11-26T09:00:00Z",
    imageUrl: "https://picsum.photos/400/300?random=5",
    category: "health",
    source: "Health Journal",
    url: "https://example.com/news/5",
  },
  {
    id: "6",
    title: "Scientists Discover New Planet in Habitable Zone",
    description:
      "Exoplanet found in star system that could potentially support life.",
    content:
      "Astronomers have discovered a new exoplanet orbiting within the habitable zone of its star, raising exciting possibilities for the search for extraterrestrial life. The planet is roughly Earth-sized and located 100 light-years away.",
    author: "Dr. Robert Kim",
    publishedAt: "2025-11-25T14:30:00Z",
    imageUrl: "https://picsum.photos/400/300?random=6",
    category: "science",
    source: "Science Today",
    url: "https://example.com/news/6",
  },
  {
    id: "7",
    title: "Quantum Computing Breakthrough Announced",
    description:
      "Major tech company achieves quantum supremacy in new processor.",
    content:
      "A leading technology company has announced a major breakthrough in quantum computing, unveiling a new processor that can solve complex problems exponentially faster than traditional computers.",
    author: "Alex Rivera",
    publishedAt: "2025-11-25T11:00:00Z",
    imageUrl: "https://picsum.photos/400/300?random=7",
    category: "technology",
    source: "Tech Insider",
    url: "https://example.com/news/7",
  },
  {
    id: "8",
    title: "Olympic Athlete Sets New World Record",
    description: "Runner breaks long-standing record in spectacular fashion.",
    content:
      "In an extraordinary display of athleticism, a young runner has shattered a world record that stood for over a decade. The achievement came during a major international competition.",
    author: "Lisa Anderson",
    publishedAt: "2025-11-24T19:00:00Z",
    imageUrl: "https://picsum.photos/400/300?random=8",
    category: "sports",
    source: "Olympic News",
    url: "https://example.com/news/8",
  },
];

export const newsService = {
  getNews: async (category?: NewsCategory | "all"): Promise<INewsArticle[]> => {
    await new Promise((resolve) => setTimeout(resolve, 250));

    if (!category || category === "all") {
      return mockNewsArticles;
    }

    return mockNewsArticles.filter((article) => article.category === category);
  },
  getNewsById: async (id: string): Promise<INewsArticle | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    return mockNewsArticles.find((article) => article.id === id);
  },
  getNewsByCategory: async (
    category: NewsCategory
  ): Promise<INewsArticle[]> => {
    await new Promise((resolve) => setTimeout(resolve, 250));

    return mockNewsArticles.filter((article) => article.category === category);
  },
};
