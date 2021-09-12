import React from 'react'
import { useParams } from 'react-router'
import Featuring from '../../Components/Featuring/Featuring'
import {HomeList} from '../../service/tmdb'
import MovieList from '../../Components/MovieList/MovieList'

const MovieReview = () => {
    const [movie, setMovie] = React.useState(null)
    const [recommendations, setRecommendations] = React.useState()
    const params = useParams()
    React.useEffect(() => {
        const getSelectedMovie = async () => {
            const movie = await HomeList.getMovieInfo(params.id, 'tv')
            setMovie(movie)
            const similar = await HomeList.getSimilarMovies(params.id, 'tv')
            setRecommendations(similar)
        }
        getSelectedMovie()
    }, [params])

    if(!recommendations) return null
    return (
        <>
           <Featuring movie={movie} />
           <div style={{marginTop:'-200px'}}>
           {recommendations && <MovieList title="Recomendados:" items={recommendations}/>}
           </div>
        </>
    )
}

export default MovieReview
