/* eslint-disable react/prop-types */
import styled from "styled-components"

const StyledTextBox = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width:740px) {
    align-items: flex-start;
  }

`

const H2 = styled.h2`
 font-size: 3.2rem;
 font-weight: 500;
 line-height: 1.2;
 margin: 0;

 @media (max-width:450px) {
    font-size: 2.4rem;
}
`

const H5 = styled.h5`
    font-size: 2rem;
    color: var(--light-gray);
    margin: .6rem 0 0;
    font-weight: 400;
    @media (max-width:450px) {
    font-size: 1.4rem;
}
`

function TextBox({heading}) {
    return (
        <StyledTextBox>
            <H2>{heading}</H2>
            <H5>Watch Now On Movies Review</H5>
        </StyledTextBox>
    )
}

export default TextBox
