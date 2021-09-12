import React from 'react'
import { Link } from 'react-router-dom'
import { Poster } from './style'

const Movie = ({item}) => {
    return (
        <Poster>
            <Link to={`/movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="Poster" />
            </Link>
            
        </Poster>
    )
}

export default Movie
