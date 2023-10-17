/* eslint-disable */
import { HiOutlineStar } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGE_URL } from "../../data/constant";

const Card = styled.div`
    background-color: var(--secondary-color);
    cursor: pointer;
    border-radius: 6px;
    filter: grayscale(0.5);
    transition: all 0.5s;

    &:hover{
        filter: grayscale(0) drop-shadow(0 0 15px rgb(0 0 0 / .5));
        transform: scale(1.05);
    }
`
const CardHeader = styled.div`
    width: 100%;
    position: relative;
`
const CardStar = styled.div`
  position: absolute;
  background-color: red;
  display: flex;
  align-items: center;
  gap:0.3rem;
  top: 0;
  right: 0;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  background-color: #000c;
`
const StarIcon = styled.span`
  font-size: 1.9rem;
  display: flex;
  & svg{
    fill:var(--orange-color);
    stroke: var(--orange-color);
  }
`
const Rating = styled.span`
font-size: 1.7rem;
`

const Img = styled.img`
   width: 100%;
   height: 10% !important;
   aspect-ratio: 4/3;
   border-top-right-radius: 6px;
   border-top-left-radius: 6px;
`

const CardBody = styled.div`
    text-align: center;
padding: 0 2rem;

@media (max-width:360px) {
    padding: 0 1.4rem;
}
`
const H6 = styled.h6`
    text-transform: capitalize;
    margin:0.7rem 0 0 ;
    font-size: 1.7rem;
    font-weight: 500;
`
const CardSubTitle = styled.p`
   font-size: 1.6rem;
   color: var(--light-gray);
   text-transform: uppercase;
   margin-top: 0;
`

const CardTextContainer = styled.div`
  background-color: var(--nav-color);
  padding: 2rem;
  border: 1px solid rgb(0 0 0 / .1);
  border-radius: 10px;
  text-transform: capitalize;
  color: var(--light-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  `
const CardText = styled.p`
font-size: 1.6rem;
   background-color: var(--secondary-color);
   padding: .5rem 1.2rem;
   display: -webkit-box;
   line-clamp: 3 ;
   -webkit-line-clamp:3;
  box-orient: vertical;
  -webkit-box-orient: vertical; 
  overflow: hidden;
`

const CardFooter = styled.div`
    margin-top: 2rem ;
    border-top: 1px solid rgba(0,0,0,.125);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:1.2rem;
    padding: 1.2rem 2rem;

    @media (max-width:360px) {
    padding: 1.2rem 1.4rem;
}
`

const FooterText = styled.div`
  font-size: 1.5rem;
  @media (max-width:320px) {
    font-size: 1.2rem;
  }

  & span:first-child {
    font-weight: 700;
  }

  & span:last-child {
    font-weight: 500;
    color:var(--light-gray)
  }
`


function Box({item}) {
  const navigate = useNavigate();
  
  const {
    adult,
    poster_path,
    vote_count,
    media_type,
    original_title,
    overview,
    title,
    release_date,
    vote_average,
    backdrop_path,
    id
} = item;

function handleClick() {
  console.log("clicked")
  navigate(`/detail/${id}`)

}


    return (
        <Card onClick={handleClick}>
            <CardHeader>
                <Img src={`${IMAGE_URL}${poster_path}`} alt="img"/>
                <CardStar><StarIcon><HiOutlineStar/></StarIcon><Rating>{vote_average.toFixed(1)}</Rating></CardStar>
            </CardHeader>
            <CardBody>
                <H6>{original_title || title}</H6>
                <CardSubTitle>{media_type}</CardSubTitle>
                <CardTextContainer>
                    <CardText>{overview}</CardText>
                </CardTextContainer>
            </CardBody>
            <CardFooter>
                <FooterText><span>Vote Count</span> : <span>{vote_count}</span></FooterText>
                <FooterText><span>First Date</span> : <span>{release_date}</span></FooterText>
            </CardFooter>
        </Card>
    )
}

export default Box
