import { useContext, useRef, useState } from "react";
import parseDate from "../utils/dates";
import { UserContext } from "../contexts/User";
import { Button, Toast, ToastBody, ToastHeader } from "react-bootstrap";
import { deleteComment } from "../utils/api";

const Comment = ({ comment, setComments, setShow }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [err, setErr] = useState(null);
  const [deletedComment, setDeletedComment] = useState();

  function handleDelete() {
    setDeletedComment(comment);
    setShow((currShow) => currShow = true)
    setComments((currComments) =>
      currComments.filter((currComment) => {
        if (currComment.comment_id !== comment.comment_id) {
          return true;
        }
        return false;
      })
    );
    console.log(comment.comment_id)
    deleteComment(comment.comment_id)
      .catch(() => {
        setErr("Something went wrong! Please try that again");
        setComments((currComments) => [deletedComment, ...currComments]);
      });
  }

  return (
    <section className="comment">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-date">{`${parseDate(comment.created_at)}`}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">{comment.votes} votes</p>
      {currUser && currUser.username === comment.author && (<Button onClick={() => {handleDelete();}} className="comment-delete">Delete</Button>)}
      {err && <p>{err}</p>}
    </section>
  );
};

export default Comment;
