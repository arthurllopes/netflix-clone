import styled from "styled-components";

export const Poster = styled.div`
    margin-top: 12px;
    width: 300px;
    padding: .3rem;

    img{
        transform: scale(0.9);
        transition: ease .2s;
        cursor: pointer;

        &:hover{
            transform: scale(1);
        }
    }

`