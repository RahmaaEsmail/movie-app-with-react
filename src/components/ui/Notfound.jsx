import { useEffect } from "react"
import styled from "styled-components"

const  StyledNotfound = styled.div`
 padding: 2.4rem 1.2rem;

@media (max-width:360px) {
    padding: 2.4rem 0.4rem;
}
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 50%;
        aspect-ratio:4/3;
    }
`

function Notfound() {
    useEffect(function() {
        document.title = "not found"
    },[])
    return (
        <StyledNotfound>
            <img src="/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design.jpg"/>
        </StyledNotfound>
    )
}

export default Notfound
