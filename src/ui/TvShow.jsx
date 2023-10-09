import { useEffect } from "react"
import TvShowContainer from "../features/tvShows/TvShowContainer"

import styled from "styled-components"

const StyledTvShow = styled.main`
    padding: 2.4rem 1.2rem;

    @media (max-width:360px) {
        padding: 2.4rem 0.4rem;
    }
`

function TvShow() {
    useEffect(function() {
        document.title = "tv show"
    },[])
    return (
        <StyledTvShow>
            <TvShowContainer/>
        </StyledTvShow>
    )
}

export default TvShow
