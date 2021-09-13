import React from 'react'
import { FreaturingContainer } from './style'
import {BsFillPlayFill} from 'react-icons/bs'

const Featuring = ({movie}) => {
    const score = (movie.vote_average)/2
    let genres = []
    for (let index in movie.genres){
        genres.push(movie.genres[index].name)
    }
    const description = movie.overview.substring(0,100)+'...'
    const descriptionAdjust = movie.overview.length > 100 ? description : movie.overview
    return (
        <>
        <FreaturingContainer image={movie.backdrop_path}>
            <div className="vertical">
                <div className="horizontal">
                    <div className="information">
                        <div>
                            <h2>{movie.original_name}</h2>
                        </div>
                        <div className="details">
                            <div style={{color: '#46d369'}}>{score} star{score > 1 && 's'}</div>
                            <div>{new Intl.DateTimeFormat('pt-br').format(new Date(movie.first_air_date))}</div>
                            <div>{movie.number_of_seasons} temporada{movie.number_of_seasons > 1 && 's'}</div>
                        </div>
                        <div>
                            <p>{descriptionAdjust}</p>
                        </div>
                        <div className="buttons">
                            <a className="watchButton" href={movie.homepage} target="_blank" rel="noreferrer">
                                <span role="img" aria-label="play"><BsFillPlayFill /></span> Assistir
                            </a>
                            <a href="https://www.linkedin.com/in/arthur-lopes-bb71391ab/" className="myListButton">
                                Minha lista
                            </a>
                        </div>
                        <div>
                            <strong>Gênero:</strong> {genres.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
            
        </FreaturingContainer>
        </>
    )
}

export default Featuring
