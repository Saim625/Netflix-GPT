import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const PopularMovies = useSelector(store => store.movies.PopularMovies)
    const dispatch = useDispatch();

    const getUsePopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }
    useEffect(() => {
       !PopularMovies && getUsePopularMovies()

    }, []);
}
export default usePopularMovies;