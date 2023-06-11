import styled from "styled-components";

export const Container = styled.form`
    border: 1px solid ${props => props.theme.color.lightBlue};
    border-radius: 5px;
    padding: 40px;
    background-color: ${props => props.theme.color.formBackground};
    width: 100%;
    box-sizing: border-box;
`

export const ErrorMessage = styled.p`
    color: ${props => props.theme.color.errorMessage};
    font-size: small;
    text-align: center;
`