import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api';
import { useEffect, useState } from 'react';
import CommentList from './CommentsList';

const ArticlePage = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res.data.article)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    
        return (
            <section className='article-page'>
                <h2>{article.title}</h2>
                <h3>{article.author}</h3>
                <p>{`uploaded ${article.created_at.slice(0, 10)} at ${article.created_at.slice(11, 19)}`}</p>
                <img className="article-page-img" src={article.article_img_url}></img>
                <p>{article.body}</p>
                <CommentList/>
            </section>
        )
};

export default ArticlePage;