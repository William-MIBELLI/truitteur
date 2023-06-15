export const addCommentOnPost = async (formData, token) => {

    try {
        const response = await fetch('http://localhost:8080/add-comment', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error.message
    }
}