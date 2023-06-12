import styled from "styled-components";

export const Card = styled.div`
    ${'' /* border: 1px solid ${props => props.theme.color.darkBlue}; */}
    margin: 10px 0;
    border-radius: 5px;
    ${'' /* box-shadow: 0px 0px 10px ${props => props.theme.color.darkBlue}; */}
`
export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;    
    width: 100%;
    padding: 30px 10px;
    box-sizing: border-box;
    
    h2{
        margin-bottom: 3px;
    }
    p{
        font-size: 0.7rem;
    }
`

export const CardBody = styled.div`
    text-align: center;
    font-size: 15px;
    
    p{
        padding: 15px;
        text-align: justify;
    }
`

export const ImgContainer = styled.img`
    width: 80%;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    width: fit-content;
`