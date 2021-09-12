import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%
    }
`