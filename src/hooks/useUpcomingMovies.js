import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const UpcomingMovies = useSelector(store => store.movies.UpcomingMovies)
    const dispatch = useDispatch();

    const getUseUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(() => {
       !UpcomingMovies && getUseUpcomingMovies()
    }, []);
}




export default useUpcomingMovies;