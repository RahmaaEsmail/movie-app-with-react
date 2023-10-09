import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Trending from "./ui/Trending"
import AppLayout from "./ui/AppLayout"
import Movies from './ui/Movies';
import TvShow from './ui/TvShow';
import Popular from './ui/Popular';
import NowPlaying from './ui/NowPlaying';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./ui/Details";
import Search from './ui/Search';
import Notfound from "./ui/Notfound";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions :{
    queries : {
      staleTime : 0,
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={true} />
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Navigate replace to="/trending"/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/tvshow" element={<TvShow/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/nowplaying" element={<NowPlaying/>}/>
          <Route path="/detail/:movieId" element={<Details/>}/>
          <Route path="/search/:movieName" element={<Search/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
