export const getPostsFromServe = async (token) => {

    try {
        const response = await fetch('http://localhost:8080/posts',{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data.posts
    } catch (error) {
        console.log(error)
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

        if(response.status !== 201){
            throw new Error('Erreur pendant la création du post')
        }
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
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
        console.log(error)
        return null
    }
}

export const updatePostOnServer = async (post, token) => {

    const id = post.get('_id')
    console.log('on est dans update : ', id)
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
        console.log(error)
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
        console.log(error)
        return false
    }
}

export const createUserOnServer = async (user) => {
    try{
        const response = await fetch('http://localhost:8080/create-user', {
            method: 'PUT',
            body: user
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const logUserOnServer = async (user) => {
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: user
        })
        const data = await response.json()
        console.log('data dans loguser : ', data)
        return data
    } catch (error) {
        console.log('error dans loguseronserver : ', error)
        return false
    }
}

export const forgetPassword = async (email) => {
    try {
        const response = await fetch(`http://localhost:8080/forget-password/${email}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const resetPassword = async (formData) => {
    try {
        const response = await fetch('http://localhost:8080/reset-password', {
            method: 'PATCH',
            body: formData
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}