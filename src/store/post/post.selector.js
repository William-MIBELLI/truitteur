 export const getPostSelector = state => {
    return state.post
 }

 export const getPostsSelector = state => {
   return state.post.posts
 }

 export const getPostByIdSelector = id => state => {
    const post = state.post.posts.find(item => item._id === id)
    if(post === undefined){
      return {}
    }
    return post
 }

//  export const getCommentsArrayByPostId = postId => state => {
//    if(!state){
//       return []
//    }
//   const post = state.post.posts.find(post => post._id === postId)
//    if(post === undefined){
//       return []
//    }
//    return post.comments
//  }