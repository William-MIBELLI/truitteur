import styled from "styled-components";

export const Container = styled.div`

    h3{
        width: 100%;
        background-color: ${props => props.theme.color.lightBlue};
        color: ${props => props.theme.color.darkBlue};
        text-align: center;
        margin: 10px 0;
    }
`