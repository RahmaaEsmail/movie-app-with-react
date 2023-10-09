import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0c2738;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 2.4rem;
  z-index: 100;
`;


function Header() { 
  return (
    <StyledHeader>
      <Logo />
      <Navbar/>
    </StyledHeader>
  );
}

export default Header;
