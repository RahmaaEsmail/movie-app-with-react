// import TrendingBox from "./TrendingBox"
import { useTvShow } from './useTvShow';
import Container from './../../components/ui/Container';
import TextBox from "./../../components/ui/TextBox";
import Spinner from "./../../components/ui/Spinner";
import Box from "./../../components/ui/Box";



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
