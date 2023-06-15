import styled from "styled-components";

export const Container = styled.p`
    text-decoration: none;
    color: ${props => props.theme.color.darkBlue};
    font-weight: bold;
    margin: 20px;
    cursor: pointer;
    color: ${props => props.theme.color.errorMessage};

    &:hover,
    &:active{
        color: #9DB2BF;
    }
`