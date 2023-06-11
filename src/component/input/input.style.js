import styled, { css } from "styled-components";

const bgTest = css`
    border: none;
    margin: 10px auto;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    width: 100%;


    label{
        font-weight: 500;
        color: ${props => props.theme.color.darkBlue};
        margin: 5px 0;
        font-weight: bold;
    }

    input{
        height: 1.8rem;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.color.darkBlue};
        padding: 0 10px;
        ${props => props.type === 'file' &&  bgTest}

        &:focus{
            box-shadow: 5px 5px 5px ${props => props.theme.color.darkBlue};
            outline: none;
        }
    }
`
