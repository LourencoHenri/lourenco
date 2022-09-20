import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.primary};
`

export const Content = styled.div`
    width: 28rem;
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: var(--gray-200);
    font-size: 1rem;
    justify-content: space-between;

    a {
        color: ${props => props.theme.headerText};
    }

`
