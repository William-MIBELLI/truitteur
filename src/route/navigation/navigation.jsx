import { Fragment } from 'react'
import MenuItem from '../../component/menu-item/menuItem'
import { Brand, Centered, SideContainer, LogMenu, PostMenu, SearchBar, Wrapper, FisherIcon } from './navigation.style'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector } from '../../store/user/user.selector'
import { logOutUser } from '../../store/user/user.action'
import Footer from '../../component/footer/footer'
import Logo from '../../asset/icon/poisson.png'
import UserMenu from '../../component/user-menu/userMenu'
import Input from '../../component/input/input'
import Title from '../../component/title/title'
import FisherManIcon from '../../asset/icon/fisherTransparent.png'
import Button from '../../component/button/button'

// <MenuItem text={'Logout'} onClickHandler={onLogoutHandler}/>

const Navigation = () => {

    const user = useSelector(getUserSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogoutHandler = () => {
        dispatch(logOutUser())
        navigate('/')
    }

    return (
        <Wrapper>
            <SideContainer >
                <PostMenu>
                    <Brand src={Logo}/>
                    <Link  to='/create-post'>New post</Link>
                    <Link  to={'/posts'}>Get posts</Link>
                </PostMenu>
                <LogMenu>
                    {
                        user.user ? ( <Button text={'Logout'} clickHandler={onLogoutHandler}/> ) : (
                            <Link  to={'/login'}>Login</Link>
                        )
                    }
                </LogMenu>
            </SideContainer>
            <Centered>
                <SearchBar>
                <FisherIcon src={FisherManIcon} />
                    <h1>TruiTTeur</h1>
                </SearchBar>
                <Outlet/>
            </Centered>
            <SideContainer right={true}>
                <UserMenu/>
            </SideContainer>
        </Wrapper>
    )
}

export default Navigation