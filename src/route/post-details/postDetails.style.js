import styled from "styled-components";

export const Wrapper = styled.div`
    width: 95%;
`

export const Container = styled.div`
    margin: 30px auto;
    text-align: center;

    h3{
        width: 100%;
        background-color: ${props => props.theme.color.lightBlue};
        color: ${props => props.theme.color.darkBlue};
        text-align: center;
        margin: 10px 0;
    }
`

export const Header = styled.div`
    text-align: left;
    padding: 10px;

    p{
        font-size: 0.7rem;
        color: grey;
    }

    h2{
        font-weight: bold;
    }
`

export const Body = styled.div`
    font-family: sans-serif;
    margin: 30px 0;

    p{
        text-align: justify;
        font-weight: bold;
        width: 70%;
        margin: auto;
    }
`

export const ImgContainer = styled.img`
    margin-bottom: 30px;
    width : 80%;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 5px 5px 15px ${props=> props.theme.color.darkBlue};
`

export const Footer = styled.div`
    text-align: right
`