import React from 'react'
import { Poster } from './style'

const Movie = ({item}) => {
    return (
        <Poster>
            <h4>{item.name || item.title || item.original_title || item.original_name}</h4>
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="Poster" />
        </Poster>
    )
}

export default Movie
