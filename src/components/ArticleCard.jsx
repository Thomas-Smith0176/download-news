import parseDate from "../utils/dates";

const ArticleCard = ({article}) => {

    return (
        <section className="article-card">
            <a href={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
                <h3>By {article.author}</h3>
                <p>{article.topic}</p>
                <p>{`uploaded ${parseDate(article.created_at)}`}</p>
                {article.votes!==1 && <p>{article.votes} votes</p>}
                {article.votes===1 && <p>{article.votes} vote</p>}
                {article.comment_count!==1 && <p>{article.comment_count} comments</p>}
                {article.comment_count===1 && <p>{article.comment_count} comment</p>}
                <img className="article-card-img" src={article.article_img_url} alt={`cover image for article ${article.title}`}></img>
            </a>
        </section>
    )
};

export default ArticleCard;