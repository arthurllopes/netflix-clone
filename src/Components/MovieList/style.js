import styled from "styled-components";

export const Section = styled.section`
    margin: 1.5rem 0 1.5rem 1.5rem;
    &:hover{
        .forward-arrow,
        .back-arrow{
            opacity: 1;
            transition: all ease .5s;
        }
    }
    .forward-arrow,
    .back-arrow{
        position: absolute;
        z-index: 500;
        font-size: 7rem;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.6);
        width: 60px;
        height: 50%;
        opacity: 0;
        overflow-x: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .forward-arrow{
        right: 0;
    }
    .back-arrow{
        left: 0;
    }
    .section {
        display: flex;
        align-items: center;
    }
    @media (max-width: 760px){
        margin-left: 1rem;
        .forward-arrow,
        .back-arrow{
            opacity: 1;
            height: 30%;
            overflow: hidden;
            font-size: 3rem;
        }

    }
`
export const List = styled.div`
    display: flex;
    align-items: center;
    overflow-x: hidden;
    margin-left: ${({position}) => `${position}px`};
    transition: all ease .5s;
`