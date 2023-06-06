import { Fragment } from 'react'
import MenuItem from '../../component/menu-item/menuItem'
import { Centered, Container, LogMenu, PostMenu } from './navigation.style'
import { Outlet } from 'react-router-dom'

const Navigation = () => {
    return (
        <Fragment>
            <Container>
                <PostMenu>
                    <MenuItem text={'Home'} target='/'/>
                    <MenuItem text={'New post'} target='/create-post'/>
                    <MenuItem text={'Get posts'} target={'/posts'}/>
                </PostMenu>
                <LogMenu>
                    <MenuItem text={'Login'} target={'/login'}/>
                    <MenuItem text={'Signin'} target='/signin'/>
                </LogMenu>
            </Container>
            <Centered>
                <Outlet/>
            </Centered>
        </Fragment>
    )
}

export default Navigation