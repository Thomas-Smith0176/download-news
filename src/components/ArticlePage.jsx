import { useParams } from 'react-router-dom';
import { getArticleById, patchArticle } from '../utils/api';
import { useEffect, useState } from 'react';
import CommentList from './CommentsList';
import parseDate from '../utils/dates';

const ArticlePage = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState()
    const [err, setErr] = useState(null)

    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res.data.article)
            setVotes(res.data.article.votes)
            setIsLoading(false)
        })
    }, [])

    function handleVote(article_id, incVote) {
        setVotes((currVotes) => currVotes + incVote)
        patchArticle(article_id, incVote).catch((err) => {
            setVotes((currVotes) => currVotes - incVote)
            setErr('Something went wrong! Please try again')
        })
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    
        return (
            <section className='article-page'>
                <h2>{article.title}</h2>
                <h3>{article.author}</h3>
                <p>{`uploaded ${parseDate(article.created_at)}`}</p>
                <img className="article-page-img" src={article.article_img_url}></img>
                <p>{article.body}</p>
                <div className="article-page-votes">   
                    {votes === 1 && <p>{votes} vote</p>}
                    {votes !== 1 && <p>{votes} votes</p>}
                    <button onClick={() => {handleVote(article_id, 1)}}>upvote</button>
                    <button onClick={() => {handleVote(article_id, -1)}}>downvote</button>
                    {err && <p>{err}</p>}
                </div>
                <CommentList/>
            </section>
        )
};

export default ArticlePage;