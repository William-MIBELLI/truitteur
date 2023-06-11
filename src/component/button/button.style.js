import styled from "styled-components";

export const BaseButton = styled.button`
    padding: 0.8rem 2rem;
    margin: 1rem;
    color: ${props => props.theme.color.lightBlue};
    background-color: white;
    box-shadow: 5px 5px 5px ${props => props.theme.color.darkBlue};
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.color.lightBlue};

    &:hover,
    &:active{
        background-color: ${props => props.theme.color.lightBlue};
        color: white;
    }
`