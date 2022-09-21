import styled from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;

    height: 3rem;
    width: 100vw;
    background-color: ${props => props.theme.primary};
    
    filter: opacity(0.90);

`

export const Content = styled.header`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 720px) {
        gap: 1rem;
    }


`

export const Nav = styled.a`
    font-weight: 300;
    color: ${props => props.theme.headerText};

    @media (max-width: 720px) {
        font-weight: 400;
    }

`

export const Menu = styled.a`
    max-width: 1120px;
    display: flex;
    width: 100%;
    justify-content: center;


    position: relative;
    height: 100%;
    align-items: center;
`

export const StyledRoot = styled(DropdownMenu.Root)`
`

export const StyledTrigger = styled(DropdownMenu.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${props => props.theme.headerText};
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;

    border: none;
    outline: none;
    cursor: pointer;
    filter: opacity(0.90);
    
    position: absolute;
    right: 0;

    @media (max-width: 720px) {
        position: absolute;
        right: 2rem;
    }

`

export const StyledPortal = styled(DropdownMenu.Portal)`
`

export const StyledContent = styled(DropdownMenu.Content)`
    background: ${props => props.theme.background};
    width: 10rem;
    border-radius: 4px;
    box-shadow: 0px 1px 2px 0px ${props => props.theme.shadow};
    z-index: 2;
    margin-top: 0.25rem;
        
`

export const StyledLabel = styled(DropdownMenu.Label)`
    color: ${props => props.theme.text};
    font-size: 0.9rem;
    text-align: center;
    padding-top: 0.5rem;

`

export const StyledRadioGroup = styled(DropdownMenu.RadioGroup)`
    padding: 0.2rem;
    line-height: 1.5;
`

export const StyledRadioItem = styled(DropdownMenu.RadioItem)`
cursor: pointer;
    color: ${props => props.theme.title};
    font-size: 0.9rem;
    border-radius: 2px;
    padding-left: 1.25rem;
    border: none;

    transition: background 0.2s, color 0.2s;

    &:hover {
        background: ${props => props.theme.secondary};
        color: ${props => props.theme.background};
        border: none;
        outline: none;
    }
`

export const StyledItemIndicator = styled(DropdownMenu.ItemIndicator)`
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 1rem;
    background: red;
`
