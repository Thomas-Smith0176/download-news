import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const CommentList = () => {
    const {article_id} = useParams();
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] =useState(true);

    useEffect(() => {
        getComments(article_id).then((res) => {
            setComments(res.data.comments)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section>
            <h4>Commnets</h4>
            {comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment}/>
            })}
        </section>
    )
};

export default CommentList;