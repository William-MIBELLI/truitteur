import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    width: 30vw;
    max-width: 200px;
    height: 100vh;
    ${'' /* background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, #00ADB5); */}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid ${props => props.theme.color.lightBlue};
    align-items: center;

`

export const SettingsMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 100px;
`

