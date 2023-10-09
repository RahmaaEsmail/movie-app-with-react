import { API_KEY, BASE_URL } from "../utils/constant";

export async function apiNowPlaying() {
 const res = await fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}`);
 if(!res.ok) {
          throw new Error("could not found now playing data");
      }
      const data = await res.json()
      
      return data
}