import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1.8rem;
    padding: 2rem 3rem;

    @media (max-width:1055px) {
        padding:2rem;
    }

    @media (max-width:1040px) {
        grid-template-columns: repeat(2,1fr);
        padding: 2rem 10rem;
    }

    @media (max-width:870px) {
        padding: 2rem 3rem;
    }

    @media (max-width:740px) {
        grid-template-columns: 1fr;
        padding: 2rem 10rem;
    }

    @media (max-width:670px) {
        padding: 2rem 5rem;
    }

    @media (max-width:500px) {
        padding: 2rem ;
    }

    @media (max-width:400px) {
        padding: 2rem 0rem;
    }
`
export default Container;