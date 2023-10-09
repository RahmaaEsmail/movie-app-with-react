import { useEffect } from "react"
import DetailContainer from "../features/details/detailContainer"

function Details() {
    useEffect(function() {
        document.title = "details"
    },[])
    return (
            <DetailContainer/>
    )
}

export default Details
