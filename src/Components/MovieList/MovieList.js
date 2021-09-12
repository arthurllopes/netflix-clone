import React from 'react'
import Movie from '../Movie/Movie'
import { List, Section } from './style'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const MovieList = ({title, items}) => {
    const [position, setPosition] = React.useState(0)
    
    function handleClick(direction){
        if(direction === 'forward'){
            let x = position - Math.round(window.innerWidth / 2);
            const fullwidth = items.results.length * 210
            if ((window.innerWidth - fullwidth) > x){ 
                x = (window.innerWidth - fullwidth) - 60;
            }    
            setPosition(x);
                
        } else {
            let x = position + Math.round(window.innerWidth / 2);
            if (x > 0) {
            x = 0;
            }
            setPosition(x);
        }
    }
    return (
        <Section>
            <h1>{title}</h1>
            <div className="section">
                <div onClick={() => handleClick('back')} className="back-arrow">
                    <span role="img" aria-label="forward arrow"><IoIosArrowBack /></span> 
                </div>
                <div onClick={() => handleClick('forward')} className="forward-arrow">
                    <span role="img" aria-label="forward arrow"><IoIosArrowForward /></span>
                </div>
                <List position={position}>
                    {items.results.map((item) => (
                        <Movie key={item.id} item={item} />
                    ))}
                </List>
            </div>
        </Section>
    )
}

export default MovieList
