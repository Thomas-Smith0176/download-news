import parseDate from "../utils/dates";

const Comment = ({comment}) => {
    return (
        <section className="comment">
            <p className="comment-author">{comment.author}</p>
            <p className="comment-date">{`${parseDate(comment.created_at)}`}</p>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-votes">{comment.votes} votes</p>
        </section>
    );
};

export default Comment;