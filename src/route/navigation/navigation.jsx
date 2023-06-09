import { Fragment } from 'react'
import MenuItem from '../../component/menu-item/menuItem'
import { Centered, Container, LogMenu, PostMenu } from './navigation.style'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector } from '../../store/user/user.selector'
import { logOutUser } from '../../store/user/user.action'

const Navigation = () => {

    const user = useSelector(getUserSelector)
    const dispatch = useDispatch()

    const onLogoutHandler = () => {
        dispatch(logOutUser())
    }

    return (
        <Fragment>
            <Container >
                <PostMenu>
                    <Link  to='/'>Home</Link>
                    <Link  to='/create-post'>New post</Link>
                    <Link  to={'/posts'}>Get posts</Link>
                </PostMenu>
                <LogMenu>
                    {
                        user.user ? ( <MenuItem text={'Logout'} onClickHandler={onLogoutHandler}/>) : (
                            <>
                                <Link  to={'/login'}>Login</Link>
                                <Link  to='/signin'>Signin</Link>
                            </>
                        )
                    }
                </LogMenu>
            </Container>
            <Centered>
                <Outlet/>
            </Centered>
        </Fragment>
    )
}

export default Navigation