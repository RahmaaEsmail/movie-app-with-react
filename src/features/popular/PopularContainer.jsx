// import TrendingBox from "./TrendingBox"
import { usePopular } from './usePopular';
import Container from './../../components/ui/Container';
import TextBox from "./../../components/ui/TextBox";
import Spinner from "./../../components/ui/Spinner";
import Box from "./../../components/ui/Box";



function PopularContainer() {
    const {data , isLoading} = usePopular()

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <Container>
             <TextBox heading='Popular'/>
             {data.results.map(item => <Box item={item} key={item.id}/>)}
        </Container>
    )
}

export default PopularContainer
