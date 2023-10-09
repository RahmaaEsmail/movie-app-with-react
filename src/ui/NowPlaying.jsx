import { useEffect } from 'react';
import NowPlayingContainer from './../features/nowPlaying/NowPlayingContainer';
import styled from "styled-components"

const StyledNowPlaying = styled.main`
    padding: 2.4rem 1.2rem;

    @media (max-width:360px) {
        padding: 2.4rem 0.4rem;
    }
`

function NowPlaying() {
    useEffect(function() {
        document.title = "now playing"
    },[])
    return (
        <StyledNowPlaying>
            <NowPlayingContainer/>
        </StyledNowPlaying>
    )
}

export default NowPlaying
