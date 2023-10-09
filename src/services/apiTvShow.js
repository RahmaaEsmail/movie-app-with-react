import { API_KEY, BASE_URL } from "../utils/constant";

export async function apiTvShow() {
 const res = await fetch(`${BASE_URL}trending/tv/week?api_key=${API_KEY}`);
 if(!res.ok) {
          throw new Error("could not found tvShow data");
      }
      const data = await res.json()
      return data
}