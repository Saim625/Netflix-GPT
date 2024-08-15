import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMovieTrailer } from '../utils/moviesSlice';

const useMovieTrailer = (id) => {

    const dispatch = useDispatch();

  const fetchVideos = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

      const filterData = json.results.filter((movie)=> movie?.type === "Trailer");
      const movieTrailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addMovieTrailer(movieTrailer))
  }

  useEffect(()=>{
    fetchVideos();
  }, []);
  return (

    <div></div>
  )
}

export default useMovieTrailer