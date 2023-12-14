import { useContext, useState } from "react";
import parseDate from "../utils/dates";
import { UserContext } from "../contexts/User";
import { Button } from "react-bootstrap";
import { deleteComment } from "../utils/api";

const Comment = ({ comment, setComments, setShowError, setErrorMsg }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [loadingDelete, setLoadingDelete] = useState(false)

  function handleDelete() {
    setLoadingDelete(true)
    deleteComment(comment.comment_id).then(() => {
      setComments((currComments) =>
      currComments.filter((currComment) => {
        if (currComment.comment_id !== comment.comment_id) {
          return true;
        }
        return false;
      })
    );
    }).catch(() => {
      setLoadingDelete(false)
      setShowError(true)
      setErrorMsg('Failed to delete comment')
      });
  }

  return (
    <section className="comment">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-date">{`${parseDate(comment.created_at)}`}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">{comment.votes} votes</p>
      {currUser && currUser.username === comment.author && !loadingDelete && (<Button onClick={() => {handleDelete();}} className="comment-delete">Delete</Button>)}
      {currUser && currUser.username === comment.author && loadingDelete && (<p>Processing...</p>)}
    </section>
  );
};

export default Comment;
