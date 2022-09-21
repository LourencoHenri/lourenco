import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: calc(100vh - 5rem);
    background: ${props => props.theme.background};
    justify-content: center;
    align-items: center;
    gap: 10rem;


    @media (max-width: 720px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }
    
`

export const Content = styled.div`

    @media (max-width: 720px) {
        margin-top: 4rem;
        text-align: center;
    }
    
    span {
        font-size: 2rem;
        color: ${props => props.theme.text};
        font-weight: 400;
    }

    h2 {
        font-size: 2.5rem;
        color: ${props => props.theme.third};
        font-weight: 500;
    }

    h1 {
        font-size: 4rem;
        color: ${props => props.theme.title};
    }
`

export const CodingImage = styled.img`
    height: 25rem;
    transform: scaleX(-1);


    @media (max-width: 720px) {
        height: 20rem;
    }
    
`