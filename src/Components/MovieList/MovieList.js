import React from 'react'
import Movie from '../Movie/Movie'
import { List, Section } from './style'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const MovieList = ({title, items}) => {
    const ref = React.useRef()
    const [position, setPosition] = React.useState(0)
    const [active, setActive] = React.useState(0)

    const fullwidth = items.results.length * 210
    React.useEffect(() => {
        setPosition(-(window.innerWidth/2 * active))
    }, [active])
    
    function handleClick(direction){
        if(direction === 'forward'){
            let x = position - Math.round(window.innerWidth / 2);
            let fullwidth= items.results.length * 210;
            if ((window.innerWidth - fullwidth) > x){ 
                x = (window.innerWidth - fullwidth) - 60;
            }    
            setPosition(x);
                
        } else {
            if(active > 0){
                setActive(prevState => prevState - 1)
            }
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
                <List ref={ref} width={fullwidth}position={position}>
                    {items.results.map((item) => (
                        <Movie key={item.id} item={item} />
                    ))}
                </List>
            </div>
        </Section>
    )
}

export default MovieList
