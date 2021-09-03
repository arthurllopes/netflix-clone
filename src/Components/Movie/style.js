import styled from "styled-components";

export const Poster = styled.div`
    margin-top: 12px;
    width: 300px;
    padding: .3rem;
    cursor: pointer;
    position: relative;

    .over{
        display: none;
        position: absolute;
        top: 8px;
        right: 20px;
        font-size: 2rem;
    }

    &:hover{
        .over{
          display: block;  
        }
        img {
            transform: scale(1);
        }
        
    }

    img{
        transform: scale(0.9);
        transition: ease .2s;
    }

`