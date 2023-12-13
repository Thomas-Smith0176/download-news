import { useContext, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { postComment } from '../utils/api';
import { UserContext } from '../contexts/User';
import { useParams } from 'react-router-dom';
import parseDate from '../utils/dates';

const CommentAdder = ({setComments}) => {
    const {currUser, setCurrUser} = useContext(UserContext)
    const {article_id} = useParams()

    const [newComment, setNewComment] = useState('');

    function handlePostComment() {
        const timePosted = new Date();
        const newCommentObj = {
            author: currUser.username,
            body: newComment,
            createdAt: parseDate(timePosted),
            votes: 0
        }
        setComments((currComments) => [newCommentObj, ...currComments])
        postComment(article_id, currUser.username, newComment)
    };

    return (
        <>
        <Form>
            <Form.Label className="comment-label">Post a comment</Form.Label>
            <Form.Control type="text" placeholder="new comment..." value={newComment} onChange={(event) => setNewComment(event.target.value)}></Form.Control>
            <Button onClick={() => {handlePostComment()}}>Post</Button>
        </Form>
        </>
    )
};

export default CommentAdder;