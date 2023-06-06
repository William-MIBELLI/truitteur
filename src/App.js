import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './route/navigation/navigation';
import Home from './route/home/home';
import Login from './route/login/login';
import CreatePost from './route/create-post/createPost';
import Posts from './route/posts/posts';
import ErrorPage from './route/404/404';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
