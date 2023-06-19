export const addCommentOnServer = async (formData, token) => {

    try {
        const response = await fetch('http://localhost:8080/add-comment', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        //console.log(data)
        return data
    } catch (error) {
        //console.log(error)
        return error.message
    }
}

export const fetchCommentsFromServer = async (parentId, token) => {

    //console.log('on rentre dans fetchserver')
    try {
        const response = await fetch(`http://localhost:8080/get-comments/${parentId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        //console.log('on return data : ', data)
        return data              
    } catch (error) {
        return error.message
    }
}