/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const StyledSearchInput = styled.input`
    background-color: var(--color-white);
    font-weight: 400;
    font-size: 1.5rem;
    border:1px solid #ced4da;
    border-radius: 5px;
    padding: 1rem 1.4rem;
    border: 1px solid var(--main-color);
    outline: none;
`



function SearchInput() {
    const navigate = useNavigate()
    const [query , setQuery] = useState('')

    function handleSearch(e) {
        setQuery(e.target.value)
        if(query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div>
           <StyledSearchInput value={query}  onChange={handleSearch}  type="text" placeholder="Search..." /> 
        </div>
    )
}

export default SearchInput
