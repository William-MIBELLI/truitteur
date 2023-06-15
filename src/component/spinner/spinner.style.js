import styled, { keyframes } from "styled-components";


const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`

export const Container = styled.div`
    width: 24px;
    height: 24px;
    border: 8px solid;
    border-color: ${props => props.theme.color.lightBlue} transparent ${props => props.theme.color.lightBlue} ${props => props.theme.color.lightBlue};
    border-radius: 50%;
    animation: ${spin} 1.3s ease-in-out infinite;
    
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
