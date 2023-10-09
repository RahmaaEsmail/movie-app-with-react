// import TrendingBox from "./TrendingBox"
import Container from './../../ui/Container';
import TextBox from "../../ui/TextBox";
import Spinner from "../../ui/Spinner";
import Box from "../../ui/Box";
import { useNowPlaying } from './useNowPlaying';



function NowPlayingContainer() {
    const {data , isLoading} = useNowPlaying()

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <Container>
             <TextBox heading='Now Playing'/>
             {data.results.map(item => <Box item={item} key={item.id}/>)}
        </Container>
    )
}

export default NowPlayingContainer
