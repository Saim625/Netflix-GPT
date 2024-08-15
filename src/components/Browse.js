import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies  from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const gptSearchView = useSelector(store => store.gpt.gptSearchView)
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
     {
      gptSearchView ? (<GptSearch/>) : (
       <>
        <MainContainer/>
      <SecondaryContainer/>
      </>
      )
     } 
      
    </div>
  )
}

export default Browse;