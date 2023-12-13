import { useParams } from 'react-router-dom';
import { getArticleById, patchArticle } from '../utils/api';
import { useEffect, useState } from 'react';
import CommentList from './CommentsList';
import parseDate from '../utils/dates';
import { Button, Toast, ToastContainer } from 'react-bootstrap';


const ArticlePage = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)
    const [err, setErr] = useState(null)
    const [showError, setShowError] = useState(false)

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
            setErr('Something went wrong! Please try that again')
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
                    <Button onClick={() => {handleVote(article_id, 1)}}>upvote</Button>
                    <Button onClick={() => {handleVote(article_id, -1)}}>downvote</Button>
                    {err && <p>{err}</p>}
                </div>
                <CommentList setShowError={setShowError}/>
                <ToastContainer position='middle-end' containerPosition='fixed'>
                <Toast onClose={() => setShowError(false)} show={showError} delay={3000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                </Toast.Header>
                <Toast.Body>Failed to delete comment, please try again</Toast.Body>
                </Toast>
                </ToastContainer>
            </section>
        )
};

export default ArticlePage;