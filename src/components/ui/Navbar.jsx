import { useState } from "react";
import styled, { css } from "styled-components";
import { HiBars4, HiXMark } from "react-icons/hi2";
import NavList from "./NavList";
import SearchInput from './SearchInput';

const StyledNavbar = styled.nav`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    @media (max-width:980px) {
        ${props => props.open ? css`
        background-color:#0c2738;
        position: absolute;
        top: 64px;
        left: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 1.2rem;
        ` : css`
            display: none;
        `}
    }
`

const MenuIcon = styled.div`
    font-size: 2.5rem;
    display: none;
    @media (max-width:980px) {
        display: flex;
    }
`

function Navbar() {
    const [isOpenNav , setIsOpenNav] = useState(false)

    function handleNav() {
        setIsOpenNav(!isOpenNav)
    }
    return (
        <>
        <StyledNavbar open={isOpenNav}>
             <NavList open={isOpenNav}/>
          <SearchInput />
        </StyledNavbar>

        <MenuIcon onClick={handleNav}>
        {isOpenNav ? <HiXMark/> : <HiBars4 />} 
       </MenuIcon>
        </>
    )
}

export default Navbar
