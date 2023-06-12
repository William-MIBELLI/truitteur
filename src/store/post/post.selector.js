 export const getPostSelector = state => {
    return state.post
 }

 export const getPostsSelector = state => {
   return state.post.posts
 }

 export const getPostByIdSelector = id => state => {
    const post = state.post.posts.find(item => item._id === id)
    return post
 }