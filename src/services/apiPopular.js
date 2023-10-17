import { API_KEY, BASE_URL } from "../data/constant";

export async function apiPopular() {
 const res = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
 if(!res.ok) {
          throw new Error("could not found popular data");
      }
      const data = await res.json()
      
      return data
}