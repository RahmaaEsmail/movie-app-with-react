import { API_KEY, BASE_URL } from "../data/constant";

export async function apiMovies() {
 const res = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
 if(!res.ok) {
          throw new Error("could not found trending movies data");
      }
      const data = await res.json()
      
      return data
}