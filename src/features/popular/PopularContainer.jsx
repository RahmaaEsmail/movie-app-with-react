// import TrendingBox from "./TrendingBox"
import Container from './../../ui/Container';
import TextBox from "../../ui/TextBox";
import Spinner from "../../ui/Spinner";
import Box from "../../ui/Box";
import { usePopular } from './usePopular';



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
