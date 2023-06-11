import styled from 'styled-components'
//    background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, ${props => props.theme.color.mediumPurple});

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, #00ADB5);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        color: white;
        margin: 0 20px;
        cursor: pointer;

        &:hover,
        &:active{
            color: #9DB2BF;
        }
    }
`
export const PostMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 50px;
`
export const LogMenu = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 50px;
`
export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 80px);
`