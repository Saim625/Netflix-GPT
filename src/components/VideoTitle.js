import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-48 w-screen aspect-video text-white px-16 absolute bg-gradient-to-r from-black bg-opacity-50'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='mt-2 w-1/4 text-xs'>{overview}</p>
        <div className='py-4'>
            <button className='bg-white text-black font-bold rounded-lg py-3 px-6 hover:bg-opacity-80'>▶ Play</button>
            <button className='bg-gray-500 text-white font-bold rounded-lg py-3 px-6 mx-2 bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle