import { useEffect } from "react"
import MoviesContainer from "../features/movies/MovieContainer"

import styled from "styled-components"

const StyledMovies = styled.main`
    padding: 2.4rem 1.2rem;

    @media (max-width:360px) {
        padding: 2.4rem 0.4rem;
    }
`

function Movies() {
    useEffect(function() {
        document.title = "movies"
    },[])
    return (
        <StyledMovies>
            <MoviesContainer/>
        </StyledMovies>
    )
}

export default Movies
