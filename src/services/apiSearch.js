import { API_KEY, BASE_URL } from "../data/constant";

export async function apiSearch(searchMovie = '') {
    const res = await fetch(`${BASE_URL}search/movie?query=${searchMovie}&api_key=${API_KEY}`);
    if (!res.ok) {
        throw new Error("could not found search data");
    }
    const data = await res.json();
    return data
}