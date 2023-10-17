import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {HiFilm} from 'react-icons/hi2';
import styled from "styled-components"

const StyledLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    gap:1rem;
    color:white;
    text-decoration: none;

    &.active{
   color:white;
 }

 &.active::after {
  content: "";
  position: absolute;
  top: 0;
  background-color: transparent;
  width: 0;
  height: 0;
 }
`
const MovieIcon = styled.span`
color: var(--orange-color);
font-weight: 900;
font-size: 2.5rem;
display: flex;
`

const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
`
const Span = styled.span`
    font-weight: 700;
`


function Logo() {
    useEffect(function() {
        document.title = "trending"
    },[])
    return (
        <StyledLogo to="/trending">
            <MovieIcon><HiFilm/></MovieIcon>
            <H1><Span>Movies</Span>Review</H1>
        </StyledLogo>
    )
}

export default Logo;
