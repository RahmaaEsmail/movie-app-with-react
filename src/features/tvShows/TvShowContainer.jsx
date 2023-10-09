// import TrendingBox from "./TrendingBox"
import Container from './../../ui/Container';
import TextBox from "../../ui/TextBox";
import Spinner from "../../ui/Spinner";
import Box from "../../ui/Box";
import { useTvShow } from './useTvShow';



function TvShowContainer() {
    const {data , isLoading} = useTvShow()

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <Container>
             <TextBox heading='Trending Tv Shows This Week'/>
             {data.results.map(item => <Box item={item} key={item.id}/>)}
        </Container>
    )
}

export default TvShowContainer
