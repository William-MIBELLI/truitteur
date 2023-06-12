import styled from 'styled-components'
//    background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, ${props => props.theme.color.mediumPurple});

export const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;

`

export const Brand = styled.img`
    width: 40px;
    height: 40px;
    margin: 20px;
    margin-right: auto;
`

export const Container = styled.nav`
    position: sticky;
    top: 0;
    width: 30vw;
    max-width: 200px;
    height: 100vh;
    ${'' /* background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, #00ADB5); */}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid ${props => props.theme.color.lightBlue};
    align-items: center;

`
export const PostMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 100px;
`
export const LogMenu = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
`

export const SearchBar = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.lightBlue};
    position: sticky;
    top: 0;
    color: #fafafa;
    height: 80px;

    h1{
        font-family: 'Bagel Fat One', cursive;
        font-size: 3rem;
        margin: 8px;
        text-align: right;
    }
`