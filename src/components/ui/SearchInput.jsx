/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { useNavigate } from "react-router-dom";
import { searchProvider } from "../../data/constant";
import styled from "styled-components";


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
    const {query , setQuery} = useContext(searchProvider)
    const navigate = useNavigate()

    function handleChange(e) {
        setQuery(e.target.value)
        if(query.length > 2) {
            navigate('/search')
        }
    }
    return (
        <div>
           <StyledSearchInput value={query} onChange={handleChange}   type="text" placeholder="Search..." /> 
        </div>
    )
}

export default SearchInput
