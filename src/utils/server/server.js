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

export const createNewPostOnServer = async (formData) => {

    try {
        const response = await fetch('http://localhost:8080/create-post',{
            method: 'POST',
            body: formData,

        })

        if(response.status !== 201){
            throw new Error('Erreur pendant la création du post')
        }
    } catch (error) {
        console.log(error)
    }
}

export const getSinglePostFromServer = async (postId) => {
    try {
        const response = await fetch(`http://localhost:8080/post/${postId}`)

        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const updatePostOnServer = async (post) => {

    const id = post.get('_id')
    console.log('on est dans update : ', id)
    try {
        const response = await fetch(`http://localhost:8080/edit-post/${id}`, {
            method: 'PUT',
            body: post
        })
        console.log('response : ', response.json())
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
        console.log(data)
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
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.user.email)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}