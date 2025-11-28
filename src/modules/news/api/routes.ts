/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

export const NEWS_ROUTES = {
  GET_NEWS: "/news",
  GET_NEWS_BY_CATEGORY: (category: string) => `/news?category=${category}`,
  GET_NEWS_BY_ID: (id: string) => `/news/${id}`,
};
