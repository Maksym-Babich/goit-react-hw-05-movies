import axios from 'axios';

const KEY = '4c46ffde27c0a95d0cf12a8147e7b935';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  const endpoint = `${BASE_URL}/trending/movie/week?api_key=${KEY}`;
  const response = await axios.get(endpoint);
  const movies = response.data.results;
  return movies;
}

export async function searchMovies(query) {
  const endpoint = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`;
  const response = await axios.get(endpoint);
  const movies = response.data.results;
  return movies;
}

export async function getMovie(id) {
  const endpoint = `${BASE_URL}/movie/${id}?api_key=${KEY}`;
  const response = await axios.get(endpoint);
  const movie = response.data;
  return movie;
}

export async function getMovieCast(id) {
  const endpoint = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`;
  const response = await axios.get(endpoint);
  const cast = response.data.cast;
  return cast;
}

export async function getMovieReviews(id) {
  const endpoint = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`;
  const response = await axios.get(endpoint);
  const reviews = response.data.results;
  return reviews;
}
