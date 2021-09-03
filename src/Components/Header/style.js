import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 1.15rem 2rem;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    background: ${({background}) => background};
    transition: all ease .4s;

    div{
        height: 100%;
    }
    img {
        height: 100%;
        width: 100%;
    }
`