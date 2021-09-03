import React from 'react'
import { LibraryContainer } from './style'
import MovieList from "../MovieList/MovieList";

const Library = ({data}) => {

    return (
        <LibraryContainer>
            {data && data.map((item) => (
            <MovieList key={item.slug} title={item.title} items={item.items} />
            ))}
        </LibraryContainer>
    )
}

export default Library
