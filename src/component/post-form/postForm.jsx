import Input from "../input/input";
import { FormContainer, Container } from "./postForm.style";
import Button from "../button/button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPostSelector } from "../../store/post/post.selector";
import { addPost } from "../../store/post/post.action";
import { createNewPostOnServer, getSinglePostFromServer, updatePostOnServer } from "../../utils/server/server";

const defaultValue = {
    author: '',
    title: '',
    message: '',
}

const PostForm = ({ editing = false, postId = undefined}) => {

    const [ post, setPost ] = useState(defaultValue)
    const [ picture, setPicture ] = useState(undefined)

    const onChangeHandler = event => {
        const { name, value } = event.target
        setPost({...post, [name]: value})
    }


    const onPichandler = event => {
        console.log(event.target.files[0])
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log('image: ', formData.get('image'))
        !editing ? await createNewPostOnServer(formData) : await updatePostOnServer(formData)
        // setPost(defaultValue)
        // setPicture('')
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getSinglePostFromServer(postId)
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
            <FormContainer onSubmit={onSubmitHandler}>
                <input type="hidden" name="author" defaultValue='Buck' />
                <input type="hidden" name="_id" defaultValue={post._id} />
                <Input name={'title'} label={'Titre'} value={post.title} changeHandler={onChangeHandler}/>
                <Input name={'message'} label={'Votre message'} value={post.message} changeHandler={onChangeHandler}/>
                <Input type={'file'} name={'image'} label={'Ajouter une photo'} value={picture} changeHandler={onPichandler} />
                <Button text={'Post'} type={'submit'}/>
            </FormContainer>
        </Container>
    )
}

export default PostForm