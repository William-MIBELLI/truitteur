import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    border: 1px solid black;
    width: fit-content;
    color: white;
    background: ${props => props.theme.color.darkBlue};

    p, button{
        padding:0 5px;
        margin: 5px;
        border: none;
    }


`