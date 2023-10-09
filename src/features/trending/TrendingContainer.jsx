// import TrendingBox from "./TrendingBox"
import Container from './../../ui/Container';
import TextBox from "../../ui/TextBox";
import { useTrending } from "./useTrending";
import Spinner from "../../ui/Spinner";
import Box from "../../ui/Box";



function TrendingContainer() {
    const {data , isLoading} = useTrending()

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <Container>
             <TextBox heading='Trending All This Week'/>
             {data.results.map(item => <Box item={item} key={item.id}/>)}
        </Container>
    )
}

export default TrendingContainer
