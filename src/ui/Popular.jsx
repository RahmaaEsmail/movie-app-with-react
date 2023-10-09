import { useEffect } from "react"
import PopularContainer from "../features/popular/PopularContainer"

import styled from "styled-components"

const StyledPopular = styled.main`
    padding: 2.4rem 1.2rem;

    @media (max-width:360px) {
        padding: 2.4rem 0.4rem;
    }
`

function Popular() {
    useEffect(function() {
        document.title = "popular"
    },[])
    return (
        <StyledPopular>
           <PopularContainer/>
        </StyledPopular>
    )
}

export default Popular
