import { API_KEY, BASE_URL } from "../utils/constant";

export async function apiTrending() {
 const res = await fetch(`${BASE_URL}trending/all/week?api_key=${API_KEY}`);
 if(!res.ok) {
          throw new Error("could not found trending data");
      }
      const data = await res.json()
      
      return data
}