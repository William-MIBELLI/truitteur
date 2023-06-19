
export const getCommentsByParentId = parentId => state => {
    const result = state.comment.comments.filter(com => {
        return com.parentId === parentId
    })
    return result
}

export const getCommentsSelector = state => {
    return state.comment
}

export const selectCommentById = commentId => state => {
    const comment = state.comment.comments.find(c => c._id === commentId)
    if(comment){
        return comment
    }
    return {}
}