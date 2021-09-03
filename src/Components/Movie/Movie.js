import React from 'react'
import { Poster } from './style'

const Movie = ({item}) => {
    return (
        <Poster>
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="Poster" />
        </Poster>
    )
}

export default Movie
