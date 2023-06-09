 export const getPostSelector = state => {
   console.log(state)
    return state.post
 }

 export const getPostsSelector = state => {
   return state.post.posts
 }