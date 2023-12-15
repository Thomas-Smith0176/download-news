import { Link } from "react-router-dom";
import parseDate from "../utils/dates";

const ArticleCard = ({article}) => {

    return (
        <section className="article-card">
            <Link to={`/articles/${article.article_id}`} className="article-card-link">
                <div className="article-card-img-cropper">
                <img className="article-card-img" src={article.article_img_url} alt={`cover image for article ${article.title}`}></img>
                </div>
                <h2>{article.title}</h2>
                <h3>By {article.author}</h3>
                <p>{article.topic}</p>
                <div className="article-card-data">
                <p>{`uploaded ${parseDate(article.created_at)}`}</p>
                {article.votes!==1 && <p>{article.votes} votes</p>}
                {article.votes===1 && <p>{article.votes} vote</p>}
                {article.comment_count!==1 && <p>{article.comment_count} comments</p>}
                {article.comment_count===1 && <p>{article.comment_count} comment</p>}
                </div>
            </Link>
        </section>
    )
};

export default ArticleCard;