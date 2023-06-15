import styled from 'styled-components'
//    background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, ${props => props.theme.color.mediumPurple});

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: minmax(150px, 300px) minmax(600px, 800px) minmax(150px, 300px);
    justify-content: center;
    width: 100%;
    margin: auto;
`

export const Brand = styled.img`
    width: 40px;
    height: 40px;
    margin: 20px;
    margin-right: auto;
`

export const SideContainer = styled.nav`
    position: sticky;
    top: 0;
    height: 100vh;
    background:${props => props.right ? '' : props.theme.color.lightBlue};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 100%;

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

export const FisherIcon = styled.img`
    width: 120px;
    height: 120px;
    position: absolute;
    left: -70px;
`