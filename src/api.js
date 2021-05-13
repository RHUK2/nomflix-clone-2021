import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f39f2b65fbe78b3eb77031124418096d',
    language: 'en-US',
  },
});

export const moviesApi = {
  nowPlaying() {
    return api.get('movie/now_playing');
  },
  upcoming() {
    return api.get('movie/upcoming');
  },
  popular() {
    return api.get('movie/popular');
  },
  movieDetail(id) {
    return api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
  },
  search(term) {
    return api.get('search/movie', {
      params: {
        query: term,
      },
    });
  },
};

export const tvApi = {
  airingToday() {
    return api.get('tv/airing_today');
  },
  topRated() {
    return api.get('tv/top_rated');
  },
  popular() {
    return api.get('tv/popular');
  },
  showDetail(id) {
    return api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
  },
  search(term) {
    return api.get('search/tv', {
      params: {
        query: term,
      },
    });
  },
};
