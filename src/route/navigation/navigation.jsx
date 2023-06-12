import { Fragment } from 'react'
import MenuItem from '../../component/menu-item/menuItem'
import { Brand, Centered, Container, LogMenu, PostMenu, SearchBar, Wrapper } from './navigation.style'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector } from '../../store/user/user.selector'
import { logOutUser } from '../../store/user/user.action'
import Footer from '../../component/footer/footer'
import Logo from '../../asset/icon/poisson.png'
import UserMenu from '../../component/user-menu/userMenu'
import Input from '../../component/input/input'
import Title from '../../component/title/title'

const Navigation = () => {

    const user = useSelector(getUserSelector)
    const dispatch = useDispatch()

    const onLogoutHandler = () => {
        dispatch(logOutUser())
    }

    return (
        <Wrapper>
            <Container >
                <PostMenu>
                    <Brand src={Logo}/>
                    <Link  to='/create-post'>New post</Link>
                    <Link  to={'/posts'}>Get posts</Link>
                </PostMenu>
                <LogMenu>
                    {
                        user.user ? ( <MenuItem text={'Logout'} onClickHandler={onLogoutHandler}/>) : (
                            <Link  to={'/login'}>Login</Link>
                        )
                    }
                </LogMenu>
            </Container>
            <Centered>
                <SearchBar>
                    <h1>Truitteur</h1>
                </SearchBar>
                <Outlet/>
            </Centered>
            <UserMenu/>
        </Wrapper>
    )
}

export default Navigation