import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from './styles/GlobalStyle';

import AppLayout from './components/ui/AppLayout';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import TvShow from './pages/TvShow';
import Details from './pages/Details';
import Search from './pages/Search';
import Notfound from './components/ui/Notfound';




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
       <ReactQueryDevtools initialIsOpen/>
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
          <Route path="/search" element={<Search/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
