import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants'

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  const searchText = useRef(null);

  // const searchMovieTMDB = async (movie)=>{
  //   const data = await fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', API_OPTIONS)

  //   return json.results;
  // }

  const handleGptSearch = async () => {

    const gptQuerry = "Act as a Movie Recommend System and suggest me movies according to querry: " +
      searchText.current.value +
      "only suggest 5 movies, comma separated movies like above give example: Movie1,Movie2,Movie3,Movie4,Movie5"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuerry }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  }

  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='  w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchBarPlaceholder} />
        <button className='px-4 py-2 m-6 col-span-3 bg-red-700 text-white rounded-lg text-center' onClick={handleGptSearch}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar