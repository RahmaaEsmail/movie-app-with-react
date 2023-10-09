import styled from "styled-components";
import { useDetails } from "./useDetails";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { secondsToHms } from "../../utils/helper";

const Overlay = styled.div`
  background : linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%);
  width:100%;
`

const StyledDetails = styled.div`
margin: 0 !important;
    background-image: url(${props=>props.backgroundImage});
    background-position:center center;
    background-repeat: no-repeat;
    background-size: cover;
`
const StyledDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2.4rem;
    padding: 4rem;

    @media (max-width:700px) {
      grid-template-columns: 1fr ;
    }

    @media (max-width:420px) {
      padding: 2rem;
    }
`
const Img = styled.img`
  aspect-ratio: 4/5;
  width: 100%;

  @media (max-width:940px) {
    aspect-ratio: 4/6;
  }

  @media (max-width:800px) {
    aspect-ratio: none;
    height: 100%;
  }
`

const H2 = styled.h2`
    font-size: 4.2rem;
    color: var(--color-white);
    font-weight: 800;
    transform: var(--transation);
    margin-bottom: 0;
    margin-top: 0;

    &:hover{
        color:rgba(255,255,255,0.7)
    }

    & span {
        color:rgba(255,255,255,0.7);
        font-weight: 400;
    }

    @media (max-width:465px) {
      font-size: 3.2rem;
    }

    @media (max-width:385px) {
      font-size: 2.8rem;
    }
`

const Facts = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap:2rem;
    align-items: center;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    margin-top:-8px ;

    @media (max-width:465px) {
      column-gap:1.7rem
    }

    @media (max-width:420px) {
      font-size: 1.6rem;
      column-gap:1.5rem;
    }
    `

const Genre = styled.div`
position: relative;
   &::before {
     content: "";
     position: absolute;
     top:12px;
     left:-10px;
     width: 5px;
     height: 5px;
     background-color: white;
     border-radius: 50%;
   }
`;

const RunTime = styled.div`
position: relative;
   &::before {
     content: "";
     position: absolute;
     top:12px;
     left:-10px;
     width: 5px;
     height: 5px;
     background-color: white;
     border-radius: 50%;
   }`;


const UserScore = styled.div`
display: flex;
align-items: center;
gap:2rem;
font-size: 1.8rem;
`;

const Percent = styled.div`
   background-color: #0a130c;
   width: 65px;
   height: 65px;
   border-radius: 50%;
   position: relative;
`

const Bar = styled.div`
    position: absolute;
    left:0;
    background-color: transparent;
    border: 4px solid #21d07a;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;

   &::after {
    position: absolute;
    content: "";
    border-style: solid;
    border-width: 4px;
    border-color:transparent transparent transparent rgb(32, 69, 41);
    width: 60px;
    height: 60px;
    border-radius: 50%;
   }
`
const ScoreText = styled.span`
   font-weight: 700;
`

const StyledTagLine = styled.p`
    font-style: italic;
    font-weight: 400;
    margin: 20px 0 10px;
    font-size: 1.7rem;
    color:var(--light-gray);
`;

const StyledOverview = styled.p`
   font-size: 2.2rem;
   font-weight: 700;
   margin: 0;
`

const StyledOverviewContent = styled.p`
    font-size: 1.7rem;
    line-height: 1.5;
    font-weight: 400;
    margin:3px 0 0;
`


function DetailContainer() {
const {data,isLoading} = useDetails()

if(isLoading) {
    return <Spinner/>
}

const {
    backdrop_path,
    original_title,
    genres,
    release_date,
    runtime,
    poster_path,
    vote_average,
    tagline,
    overview,
} = data

  return (
      
      <StyledDetails backgroundImage={`${IMAGE_URL}${backdrop_path}`}>
      <Overlay>
      <StyledDetailContainer>
      <Img src={`${IMAGE_URL}${poster_path}`} />
      <div>
        <H2>{original_title} <span>({release_date.split("-")[0]})</span></H2>
        <Facts><div>{release_date} </div><Genre> {genres.map(genre => genre.name).join(" , ")}</Genre> <RunTime>{secondsToHms(runtime)}</RunTime></Facts>
        <UserScore>
          <Percent>
            <Bar>
            <span>{(vote_average.toFixed(1)*10)}%</span>
            </Bar>
          </Percent>
          <ScoreText>User Score</ScoreText>
        </UserScore>
        <div>
          <StyledTagLine>{tagline}</StyledTagLine>
          <StyledOverview>Overview</StyledOverview>
          <StyledOverviewContent>
            {overview}
          </StyledOverviewContent>
        </div>
      </div>
      </StyledDetailContainer>
      </Overlay>
    </StyledDetails>
  );
}

export default DetailContainer;
