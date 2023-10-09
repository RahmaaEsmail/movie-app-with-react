import { useQuery } from "@tanstack/react-query";
import { apiTvShow } from "../../services/apiTvShow";

export function useTvShow() {
    const  {data , isLoading} = useQuery({
        queryKey : ['tvshow'],
        queryFn: apiTvShow
    })
    return {data , isLoading};
}

