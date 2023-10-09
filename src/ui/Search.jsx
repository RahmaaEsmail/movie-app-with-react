import styled from "styled-components"
import SearchContainer from "../features/search/SearchContainer"
import { useEffect } from "react"

const StyledSearch = styled.div`
    padding: 2.4rem 1.2rem;

@media (max-width:360px) {
    padding: 2.4rem 0.4rem;
}
`

function Search() {
    useEffect(function() {
        document.title = "search"
    },[])
    return (
        <StyledSearch>
            <SearchContainer/>
        </StyledSearch>
    )
}

export default Search
