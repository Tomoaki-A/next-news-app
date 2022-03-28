export const useFetch = async (url) => {
  const res = await fetch(url);
  const json = await res.json();

  const articles = json.articles;

  return {
    articles: articles,
    isLoading: articles ? false : true,
  };
};
