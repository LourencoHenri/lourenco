import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    background: ${props => props.theme.background};



    @media (max-width: 720px) {
        padding-top: 0rem;
    }

`

export const Content = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;


    
`

export const Title = styled.h2`
    text-align: right;
    font-size: 2.5rem;
    color: ${props => props.theme.title};
    margin-top: 4rem; //mudança, era -4

    @media (max-width: 720px) {
        text-align: center;
        margin-bottom: 0rem;
    }

`

export const Box = styled.div`
    align-items: center;
    justify-content: right;
    display: flex;
    gap: 3rem;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
    }

`

export const TextContent = styled.div` 
    width: 42rem;
    text-align: right;
    font-size: 1.5rem;
    color: ${props => props.theme.text};
    line-height: 1.75; 
    
    @media (max-width: 720px) {
        width: 80%;
        text-align: center;
    }

`

export const CodingImage = styled.img`
    height: 25rem;



`