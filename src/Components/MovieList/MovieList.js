import React from 'react'
import Movie from '../Movie/Movie'
import { List, Section } from './style'

const MovieList = ({title, items}) => {
    return (
        <Section>
        <h1>{title}</h1>
        <List>
            {items.results.map((item) => (
                <Movie key={item.id} item={item} />
            ))}
        </List>
        </Section>
    )
}

export default MovieList
