import styled from "styled-components";

export const FreaturingContainer = styled.section`
    height: 110vh;
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
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 100px 2rem 200px;


        h2{
            font-size: 4rem;
            word-break: normal;
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
        width: 90%;
    }
    .buttons{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
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
        font-size: 1rem;
        font-weight: bold;
        padding: 8px 20px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2;
        text-justify: center;
    }
    
    @media (max-width: 760px){
        .information{
            width: 80%;
            h2{
                font-size: 2rem;
            }
            p{
                font-size: 1rem;
            }
        }
        .details{
            width: 100%;
        }
        .watchButton,
        .myListButton{
            font-size: .85rem;
        }
    }
    @media (max-width: 430px){
        .information{
            width: 100%;
            padding-left: 1rem;
        }
    }
`