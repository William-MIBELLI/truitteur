import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    ${'' /* background: linear-gradient(45deg, ${props => props.theme.color.darkBlue}, #00ADB5); */}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`

export const SettingsMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 100px;
`

