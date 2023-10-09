import { useQuery } from "@tanstack/react-query";
import { apiDetails } from "../../services/apiDetails";
import { useParams } from "react-router-dom";

export function useDetails() {
    const {movieId} = useParams()
    const  {data , isLoading} = useQuery({
        queryKey : ['details'],
        queryFn: () => apiDetails(movieId)
    })
    return {data , isLoading};
}
