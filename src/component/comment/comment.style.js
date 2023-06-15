import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

export const CommentBody = styled.div`
    display: flex;
    flex-direction: row;
`

export const CreationDiv = styled.div`
    font-size: 0.7rem;
    width: 25%;
`

export const ContentDiv = styled.div`
    text-align: center;
    width: 60%;
    font-weight: bold;
`

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: right;
    font-size: 0.7rem;
    text-align: right;
    width: 15%;
`

export const CommentFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    font-size: 0.7rem;
`
