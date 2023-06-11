import Input from "../input/input";
import { Container } from "./postForm.style";
import Button from "../button/button";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPostSelector } from "../../store/post/post.selector";
import { addPost } from "../../store/post/post.action";
import { createNewPostOnServer, getSinglePostFromServer, updatePostOnServer } from "../../utils/server/server";
import { getUserSelector, getUserTokenSelector } from "../../store/user/user.selector";
import SimpleReactValidator from "simple-react-validator";
import Form from "../form/form";
import ButtonContainer from "../button-container/buttonContainer";
import Spinner from "../spinner/spinner";
import { useNavigate } from "react-router-dom";

const defaultValue = {
    author: '',
    title: '',
    message: '',
}

const PostForm = ({ editing = false, postId = undefined}) => {

    const [ post, setPost ] = useState(defaultValue)
    const [ picture, setPicture ] = useState(undefined)
    const [ up, forceUpdate ] = useState(0)
    const [ Loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(undefined)
    const token = useSelector(getUserTokenSelector)
    const user = useSelector(getUserSelector)
    const navigate = useNavigate()
    const validator = useRef(new SimpleReactValidator())
    const onChangeHandler = event => {
        const { name, value } = event.target
        setPost({...post, [name]: value})
    }


    const onPichandler = event => {
        setPicture(event.target.files.length === 0 ? undefined : event.target.files[0].type  )
        console.log(picture)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if(validator.current.allValid()){
            setLoading(true)
            const formData = new FormData(event.target)
            console.log('image: ', formData.get('image'))
            const data = !editing ? await createNewPostOnServer(formData, token) : await updatePostOnServer(formData, token)
            console.log(data.status)
            if(data.status === 201){
                navigate('/posts')
            }else {
                setLoading(false)
                setError(data.message)
            }
        } else {
            validator.current.showMessages()
            forceUpdate(up + 1)
        }
    }

    const onBlurHandler = event => {
        const { name, value } = event.target
        if(value.trim().length !== 0){
            validator.current.showMessageFor(name)
        }else{
            validator.current.hideMessageFor(name)
        }
        forceUpdate(up + 1)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getSinglePostFromServer(postId, token)
            setPost(data.post)
            console.log(data)
        }
        if(editing){
            console.log('useeffect de edit')
            getData()
        }
    },[])

    return (
        <Container>
            <Form onSubmit={onSubmitHandler} error={error}>
                <input type="hidden" name="author" defaultValue={user.user._id} />
                <input type="hidden" name="_id" defaultValue={post._id} />
                <Input name={'title'} label={'Titre'} value={post.title} blurHandler={onBlurHandler} changeHandler={onChangeHandler}/>
                {validator.current.message('title', post.title, 'required|alpha_num_space|min:3|max:30')}
                <Input name={'message'} label={'Votre message'} value={post.message} blurHandler={onBlurHandler} changeHandler={onChangeHandler}/>
                {validator.current.message('message', post.message, 'required|max:300')}
                <Input type={'file'} name={'image'} label={'Ajouter une photo'}  changeHandler={onPichandler} />
                {validator.current.message('image', picture, 'required' )}
                {
                    Loading ? ( <Spinner/> ) : (
                        <ButtonContainer>
                            <Button text={'Post'} type={'submit'}/>
                        </ButtonContainer>

                    )
                }
            </Form>
        </Container>
    )
}

export default PostForm