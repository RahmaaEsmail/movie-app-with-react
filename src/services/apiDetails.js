import { API_KEY, BASE_URL } from "../data/constant";

export async function apiDetails(movie_id) {
    const res = await fetch(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`)
   
    if(!res.ok) {
        throw new Error("could not found details of movie")
    }

    const data = await res.json()
    return data;
}