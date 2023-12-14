import { useContext, useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentAdder from "./CommentAdder";

const CommentList = ({setShowError}) => {
    const {article_id} = useParams();
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComments(article_id).then((res) => {
            setComments(res.data.comments)
            setIsLoading(false)
        })
    }, [comments]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section className="comments">
            <h4>Comments</h4>
            <CommentAdder setComments={setComments}/>
            {comments.length === 0 && <p>No comments yet!</p>}
            {comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} setComments={setComments} setShowError={setShowError}/>
            })}
        </section>
    );
};

export default CommentList;