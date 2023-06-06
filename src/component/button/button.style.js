import styled from "styled-components";

export const BaseButton = styled.button`
    padding: 0.5rem 1rem;
    margin: 1rem;
    background-color: #9DB2BF;
    border: none;
    color: white;
    cursor: pointer;

    &:hover,
    &:active{
        color: #9DB2BF;
        background-color: white;
    }
`