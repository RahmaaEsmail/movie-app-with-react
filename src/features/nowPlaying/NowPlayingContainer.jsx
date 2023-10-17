// import TrendingBox from "./TrendingBox"
import { useNowPlaying } from "./useNowPlaying";
import Container from "./../../components/ui/Container";
import TextBox from "./../../components/ui/TextBox";
import Spinner from "./../../components/ui/Spinner";
import Box from "./../../components/ui/Box";

function NowPlayingContainer() {
  const { data, isLoading } = useNowPlaying();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <TextBox heading="Now Playing" />
      {data.results.map((item) => (
        <Box item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default NowPlayingContainer;
