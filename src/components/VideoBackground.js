import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({id}) => {

  const Trailer = useSelector(store => store.movies?.addMovieTrailer)
  useMovieTrailer(id)

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
       src={ "https://www.youtube.com/embed/" + Trailer?.key + "?autoplay=1&mute=1&rel=0" }

       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  >
       </iframe>

    </div>
  )
}

export default VideoBackground