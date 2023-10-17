// import TrendingBox from "./TrendingBox"
import { useTrending } from "./useTrending";
import Container from './../../components/ui/Container';
import TextBox from "./../../components/ui/TextBox";
import Spinner from "./../../components/ui/Spinner";
import Box from "./../../components/ui/Box";



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
