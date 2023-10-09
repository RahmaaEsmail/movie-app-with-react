import {  useQuery } from "@tanstack/react-query";
import { apiSearch } from "../../services/apiSearch";
import { useParams } from "react-router-dom";

export function useSearch() {
    const {movieName} = useParams()
    const  {data , isLoading} = useQuery({
        queryKey : ['search'],
        queryFn: () => apiSearch(movieName),
        retry : true
    })
    return {data , isLoading};
}

