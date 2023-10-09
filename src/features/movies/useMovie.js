import { useQuery } from "@tanstack/react-query";
import { apiMovies } from "../../services/apiMovies";

export function useMovies() {
    const  {data , isLoading} = useQuery({
        queryKey : ['movies'],
        queryFn: apiMovies
    })
    return {data , isLoading};
}

