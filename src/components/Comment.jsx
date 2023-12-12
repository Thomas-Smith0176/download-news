const Comment = ({comment}) => {
    return (
        <section className="comment">
            <p className="comment-author">{comment.author}</p>
            <p className="comment-date">{`${comment.created_at.slice(0, 10)} ${comment.created_at.slice(11, 19)}`}</p>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-votes">{comment.votes} votes</p>
        </section>
    );
};

export default Comment;