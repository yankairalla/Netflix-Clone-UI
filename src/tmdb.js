const API_KEY = "00af6c4ff2eca8ce395f113cffae849b";
const API_BASE = "https://api.themoviedb.org/3";

// Originais da netflix
// recomendados(trending)
// em alta (top rated)

// acao
// comedia
// terror
// romance

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export const getHomeList = async () => {
  return [
    {
      slug: "originals",
      title: "Originais do netflix",
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para você",
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedia",
      title: "Comédia",
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentario",
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
};

export const getMovieInfo = async (movieId, type) => {
  let info = {};

  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      default:
        info = null;
        break;
    }
  }

  return info;
};
