import { useQuery } from "@tanstack/react-query";
import { apiNowPlaying } from "../../services/apiNowPlaying";

export function useNowPlaying() {
    const  {data , isLoading} = useQuery({
        queryKey : ['nowPlaying'],
        queryFn: apiNowPlaying
    })
    return {data , isLoading};
}

