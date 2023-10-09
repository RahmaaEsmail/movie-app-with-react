import { useQuery } from "@tanstack/react-query";
import { apiPopular } from "../../services/apiPopular";

export function usePopular() {
    const  {data , isLoading} = useQuery({
        queryKey : ['popular'],
        queryFn: apiPopular
    })
    return {data , isLoading};
}

