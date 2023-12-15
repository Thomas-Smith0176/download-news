import { useContext, useState } from "react";
import parseDate from "../utils/dates";
import { UserContext } from "../contexts/User";
import { Button } from "react-bootstrap";
import { deleteComment, patchComment } from "../utils/api";

const Comment = ({ comment, setComments, setShowError, setErrorMsg }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [votes, setVotes] = useState(0)
  const [upvoteDisabled, setUpvoteDisabled] = useState(false)
  const [downvoteDisabled, setDownvoteDisabled] = useState(false)
  const [upvoteClick, setUpvoteClick] = useState(false)
  const [downvoteClick, setDownvoteClick] = useState(false)

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

  function handleUpvote( commentId, incVote) {
    setDownvoteDisabled(true)   
    if (upvoteClick) {
        incVote = incVote - 2
        setDownvoteDisabled(false)
        setUpvoteDisabled(false)
        setUpvoteClick(false)
    }
    else {
        setUpvoteClick(true)
    }
    setVotes((currVotes) => currVotes + incVote)
    patchComment(commentId, incVote).catch(() => {
        setVotes((currVotes) => currVotes - incVote)
        setUpvoteDisabled(false)
        setDownvoteDisabled(false)
        setShowError(true)
        setErrorMsg('Upvote failed')
    })
}

function handleDownvote (commentId, incVote) {
  setUpvoteDisabled(true)
  if (downvoteClick) {
      incVote = incVote + 2
      setUpvoteDisabled(false)
      setDownvoteDisabled(false)
      setDownvoteClick(false)
  }
  else {
      setDownvoteClick(true)
  }
  setVotes((currVotes) => currVotes + incVote)
  patchComment(commentId, incVote).catch(() => {
      setVotes((currVotes) => currVotes - incVote)
      setUpvoteDisabled(false)
      setDownvoteDisabled(false)
      setShowError(true)
      setErrorMsg('Downvote failed')
  })
}

  return (
    <section className="comment">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-date">{`${parseDate(comment.created_at)}`}</p>
      <p className="comment-body">{comment.body}</p>
      {currUser && currUser.username === comment.author && !loadingDelete && (<Button onClick={() => {handleDelete();}} className="comment-delete">Delete</Button>)}
      {currUser && currUser.username === comment.author && loadingDelete && (<p>Processing...</p>)}
      <div className="comment-vote-buttons">
      <button onClick={() => {handleUpvote( comment.comment_id, 1 )}} disabled={upvoteDisabled} className="comment-vote-button">upvote</button>
      <button onClick={() => {handleDownvote( comment.comment_id, -1 )}} disabled={downvoteDisabled} className="comment-vote-button">downvote</button>
      <p className="comment-votes">{comment.votes} votes</p>
      </div>
    </section>
  );
};

export default Comment;
