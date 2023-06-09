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
    border-color: black transparent black black;
    border-radius: 50%;
    animation: ${spin} 1.3s ease-in-out infinite;
`
