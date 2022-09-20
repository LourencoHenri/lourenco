import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.background};
    padding-top: 8rem;
    height: 40rem;

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

`

export const Title = styled.h2`
    text-align: left;
    font-size: 2.5rem;
    color: ${props => props.theme.title};

`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20rem;

    
`

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem; 
    
`

export const ContactContents = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.125rem;
    font-weight: 500;
    color: ${props => props.theme.primary};
   
`

export const CallToAction = styled.div`

    h2 {
        text-align: center;
        font-size: 4rem;
        color: ${props => props.theme.title};
    }

    h3 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 500;
        color: ${props => props.theme.secondary};
    }
`