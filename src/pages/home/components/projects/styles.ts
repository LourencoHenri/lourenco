import styled from "styled-components";

export const Container = styled.div`
    //display: flex;
    //flex-direction: column;
    background: ${props => props.theme.background};
    padding-top: 5rem;

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

`

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: ${props => props.theme.title};

`

export const SubTitle = styled.div` //h2
    margin-top: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.text};

    span {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.third};
    }
`

export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
    gap: 5rem;
`

export const Card = styled.div`
    border-radius: 4px;
    box-shadow: 0px 1px 5px 0px ${props => props.theme.shadow};
    overflow: hidden;

    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0px 1px 10px 1px ${props => props.theme.shadow};
    }
`

export const CardImg = styled.div`
    border-radius: 4px 4px 0 0;
    height: 15rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
        height: 100%;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

`

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: ${props => props.theme.primary};
    margin-bottom: 0.5rem;

`

export const CardText = styled.div`
    height: 8rem;
    text-align: justify;
    font-size: 1.125rem;
    font-weight: 400;
    color: ${props => props.theme.text};
    line-height: 1.5;
    margin-bottom: 1rem;
    
`

export const CardAnchor = styled.a`

    margin: 0 auto;

    button {
        cursor: pointer;

        width: 15rem;
        height: 2rem;

        background: ${props => props.theme.primary};
        color: ${props => props.theme.headerText};
        font-size: 1rem;
        font-weight: 500;

        border-radius: 4px;
        border: none;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.5);
        }

    }

`