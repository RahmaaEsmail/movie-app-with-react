import { useQuery } from "@tanstack/react-query";
import { apiTrending } from "../../services/apiTrending";

export function useTrending() {
    const  {data , isLoading} = useQuery({
        queryKey : ['trending'],
        queryFn: apiTrending
    })
    return {data , isLoading};
}

