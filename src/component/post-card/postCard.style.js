import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid black;
    padding: 0 30px;
    margin: 10px 0;
`
export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;    
    width: 100%;
    
    h2{
        margin-bottom: 3px;
    }
    p{
        font-size: 0.7rem;
    }
`

export const CardBody = styled.div`
    text-align: center;
    margin: 15px 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    width: fit-content;
`