
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
        return {message : `Error : ${error.message}`}
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
        return {message : `Error : ${error.message}`}
    }
}

export const forgetPassword = async (email) => {
    try {
        const response = await fetch(`http://localhost:8080/forget-password/${email}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return {message : `Error : ${error.message}`}
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
        return {message : `Error : ${error.message}`}
    }
}