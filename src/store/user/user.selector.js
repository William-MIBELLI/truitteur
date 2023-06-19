export const getUserSelector = state => {
    return state.user
}

export const getUserTokenSelector = state => {
    return state.user.token
}

export const selectUserLikedPostById = postId => state => {
    const findedPost =  state.user.user.likedPost.find(p => p.postId.toString() === postId.toString())
    if(!findedPost){
        return 0
    }
    return findedPost.value
}