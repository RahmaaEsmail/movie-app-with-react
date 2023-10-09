/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const List = styled.ul`
   padding-left: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    height: 100%;
    flex: 1;

    @media (max-width:980px) {
        flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    }
`
const Li = styled.li`
 height: 100%;
`

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--color-white);
  font-weight: 700;
  letter-spacing: 1px;
  font-size:1.6rem;
  color:var(--light-gray);
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: center;
  
`


function NavList() {
    return (
        <List>
            <Li>
            <Link to="/trending">Trending</Link>
            </Li>
            <Li>
            <Link to="/movies">Movies</Link>
            </Li>
            <Li>
            <Link to="/tvshow">Tv Show</Link>
            </Li>
            <Li>
            <Link to="/popular">Popular</Link>
            </Li>
            <Li>
            <Link to="/nowplaying">Now Playing</Link>
            </Li>
        </List>
    )
}

export default NavList
