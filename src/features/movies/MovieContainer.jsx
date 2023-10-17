// import TrendingBox from "./TrendingBox"
import { useMovies } from './useMovie';
import Container from './../../components/ui/Container';
import TextBox from "./../../components/ui/TextBox";
import Box from "./../../components/ui/Box";
import Spinner from './../../components/ui/Spinner';



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
