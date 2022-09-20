import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    background: ${props => props.theme.background};

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
    margin-bottom: -4rem;

`

export const Box = styled.div`
    align-items: center;
    justify-content: right;
    display: flex;
    gap: 3rem;

`

export const TextContent = styled.div` 
    width: 42rem;
    text-align: right;
    font-size: 1.5rem;
    color: ${props => props.theme.text};
    line-height: 1.75;    

`

export const CodingImage = styled.img`
    height: 25rem;

`