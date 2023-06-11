import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: linear-gradient(90deg, ${props => props.theme.color.lightBlue},${props => props.theme.color.darkBlue});
`