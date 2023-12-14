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
    const [err, setErr] = useState(null)
    const [tempId, setTempId] = useState(0)

    function handlePostComment() {
        if (newComment.length === 0) {
            return <p></p>
        }
        else {
            setNewComment('')
            setTempId((currTempId) => currTempId - 1)
            const timePosted = new Date();
            const newCommentObj = {
                comment_id: tempId,
                author: currUser.username,
                body: newComment,
                createdAt: parseDate(timePosted),
                votes: 0
            }
            setComments((currComments) => [newCommentObj, ...currComments])
            postComment(article_id, currUser.username, newComment).catch(() => {
                setComments((currComments) => currComments.shift())
                setErr('Something went wrong! Please try that again')
            })
        }
    };

    return (
        <>
        {!currUser && <p>Please sign in to post a comment</p>}
        {currUser && <Form>
            <Form.Label className="comment-label">Post a comment</Form.Label>
            <Form.Control type="text" placeholder="new comment..." value={newComment} onChange={(event) => setNewComment(event.target.value)}></Form.Control>
            {err && <p>{err}</p>}
            <Button onClick={() => {handlePostComment()}}>Post</Button>
        </Form>}
        </>
    )
};

export default CommentAdder;