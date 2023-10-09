import { useEffect } from "react"
import TrendingContainer from "../features/trending/TrendingContainer"

import styled from "styled-components"

const StyledTrending = styled.main`
    padding: 2.4rem 1.2rem;

    @media (max-width:360px) {
        padding: 2.4rem 0.4rem;
    }
`

function Trending() {
    useEffect(function(){
        document.title = "trending"
    },[])
    return (
        <StyledTrending>
            <TrendingContainer/>
        </StyledTrending>
    )
}

export default Trending
