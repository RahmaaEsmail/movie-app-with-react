// import TrendingBox from "./TrendingBox"
import Container from './../../ui/Container';
import TextBox from "../../ui/TextBox";
import Spinner from "../../ui/Spinner";
import Box from "../../ui/Box";
import { useSearch } from './useSearch';

function SearchContainer() {
    const {data , isLoading} = useSearch()

    if(isLoading) {
        return <Spinner/>
    }

    console.log(data.results)

    return (
        <Container>
             <TextBox heading='Search'/>
             {data.results.map(item => <Box item={item} key={item.id}/>)}
        </Container>
    )
}

export default SearchContainer
