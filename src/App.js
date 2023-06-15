import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './route/navigation/navigation';
import Home from './route/home/home';
import Login from './route/login/login';
import CreatePost from './route/create-post/createPost';
import Posts from './route/posts/posts';
import ErrorPage from './route/404/404';
import PostDetails from './route/post-details/postDetails';
import EditPost from './route/edit-post/editPost';
import SignIn from './route/sign-in/signIn';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector, getUserTokenSelector } from './store/user/user.selector';
import ProtectedRoute from './route/protected-route/protectedRoute';
import ForgetPassword from './route/forget-password/forgetPassword';
import ResetPassword from './route/reset-password/resetPassword';
import { useEffect } from 'react';
import { fetchPostsAsync } from './store/post/post.action';



function App() {

  const user = useSelector(getUserSelector)
  const token = useSelector(getUserTokenSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsAsync(token))
  },[])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/reset-password/:token' element={<ResetPassword/>}/>
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/edit-post/:postId' element={<EditPost/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/post-details/:postId' element={<PostDetails/>}/>
        </Route>
        <Route path='/*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
