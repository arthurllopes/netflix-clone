import styled from "styled-components";

export const FreaturingContainer = styled.section`
    height: 100vh;
    background-image: ${({image}) => `url(https://image.tmdb.org/t/p/original${image})`};
    background-size: cover;
    background-position: center;

    .vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 60%);
    }
    .horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 30%);
    }
    .information{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 2rem;

        h2{
            font-size: 4rem;
        }
        div{
            margin: 4px 0;
        }
        p{
            font-size: 1.5rem;
        }
    }
    .details{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        width: 60%;
    }
    .buttons{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
    .watchButton{
        background-color: #FFF;
        color: #000;
        flex-wrap: nowrap;
        text-align: center;
        &:hover{
            opacity: 0.7; 
        }
    }
    .myListButton{
        background-color: #333;
        color: #FFF;
        &:hover{
            opacity: 0.7; 
        }
    }
    .watchButton,
    .myListButton {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2;
        text-justify: center;
    }
`