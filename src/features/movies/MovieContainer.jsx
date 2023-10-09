// import TrendingBox from "./TrendingBox"
import Container from './../../ui/Container';
import TextBox from "../../ui/TextBox";
import Spinner from "../../ui/Spinner";
import Box from "../../ui/Box";
import { useMovies } from './useMovie';



function MoviesContainer() {
    const {data , isLoading} = useMovies()

    if(isLoading) {
        return <Spinner/>
    }
    console.log(data.results)

    return (
        <Container>
             <TextBox heading='Trending Movies This Week'/>
             {data.results.map(item => <Box item={item} key={item.id}/>)}
        </Container>
    )
}

export default MoviesContainer
