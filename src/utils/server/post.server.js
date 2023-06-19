export const getPostsFromServe = async (token) => {

    try {
        const response = await fetch('http://localhost:8080/posts',{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = await response.json()
        ////console.log('data dans getpostserver : ', data)
        return data
    } catch (error) {
        //console.log(error)
        return null
    }
}

export const createNewPostOnServer = async (formData, token) => {

    try {
        const response = await fetch('http://localhost:8080/create-post',{
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`
            }

        })

        //console.log('resposne dans createpost : ', response)
        if(response.status !== 201){
            throw new Error('Erreur pendant la création du post')
        }
        const data = response.json()
        return data
    } catch (error) {
        //console.log(error)
        return error
    }
}

export const getSinglePostFromServer = async (postId, token) => {
    try {
        const response = await fetch(`http://localhost:8080/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = await response.json()
        return data
    } catch (error) {
        //console.log(error)
        return null
    }
}

export const updatePostOnServer = async (post, token) => {

    const id = post.get('_id')
    //console.log('on est dans update : ', id)
    try {
        const response = await fetch(`http://localhost:8080/edit-post/${id}`, {
            method: 'PUT',
            body: post,
            headers : {
                Authorization: `Bearer ${token}` 
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        //console.log(error)
        return false
    }
}

export const deletePostOnServer = async (postId, token) => {
    try {
        const response = await fetch(`http://localhost:8080/delete-post/${postId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        //console.log(error)
        return false
    }
}

export const updateLikeOnServer = async (token, formData) => {

    try {
        const response = await fetch('http://localhost:8080/update-like', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}` 
            },
            body: formData
        })
        if(response.status !== 201){
            const data = await response.json()
            throw new Error(data.message)
        }
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
