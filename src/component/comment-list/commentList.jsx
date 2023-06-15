import { useSelector } from "react-redux";
import { Container } from "./commentList.style";
import { getCommentsArrayByPostId, getPostByIdSelector } from "../../store/post/post.selector";
import { useState, useEffect } from "react";
import Comment from "../comment/comment";

const CommentList = ({ comments }) => {

    return ( 
        <Container>
            <h3>Comments 🫣</h3>
            {
                comments.length === 0 ? ( <p>No comms 🤯</p>) : (
                    comments.map((c, ind) => {
                        return (
                            <Comment key={ind} comment={c}/>
                        )
                    })
                )
            }
        </Container>
    )
}

export default CommentList