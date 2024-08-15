import { createSlice } from "@reduxjs/toolkit";


 const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        PopularMovies:null,
        UpcomingMovies: null,
        addMovieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.UpcomingMovies = action.payload;
        },
        addMovieTrailer: (state,action)=>{
            state.addMovieTrailer = action.payload;
        }
    }
 })

 export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addUpcomingMovies} = moviesSlice.actions;
 export default moviesSlice.reducer;