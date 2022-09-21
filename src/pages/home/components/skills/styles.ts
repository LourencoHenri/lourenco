import styled from "styled-components";
import { SiTypescript } from 'react-icons/si';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.background};   
    height: 25rem;

    @media (max-width: 720px) {
        height: 100%;
    }

`

export const Content = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    @media (max-width: 720px) {
        width: 90%;
    }
`

export const MySkills = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);  
    }

`

export const Title = styled.h2`
    margin: 5rem;
    text-align: center;
    font-size: 2.5rem;
    color: ${props => props.theme.title};

`

export const Skill = styled.a`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    
    
    span {
        padding-top: 1rem;
        color: ${props => props.theme.third};
        font-weight: 500;
    }

    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.5);
    }

`