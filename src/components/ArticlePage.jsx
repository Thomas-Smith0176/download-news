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
    const [upvoteDisabled, setUpvoteDisabled] = useState(false)
    const [downvoteDisabled, setDownvoteDisabled] = useState(false)
    const [upvoteClick, setUpvoteClick] = useState(false)
    const [downvoteClick, setDownvoteClick] = useState(false)

    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res.data.article)
            setVotes(res.data.article.votes)
            setIsLoading(false)
        })
    }, [])

    function handleUpvote( article_id, incVote) {
        setVotes((currVotes) => currVotes + incVote)
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
        patchArticle(article_id, incVote).catch((err) => {
            setVotes((currVotes) => currVotes - incVote)
            setUpvoteDiabled(false)
            setDownvoteDiabled(false)
            //error message toast here
        })
    }

    function handleDownvote (article_id, incVote) {
        setVotes((currVotes) => currVotes + incVote)
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
        patchArticle(article_id, incVote).catch((err) => {
            setVotes((currVotes) => currVotes - incVote)
            setUpvoteDiabled(false)
            setDownvoteDiabled(false)
            //error message toast here
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
                    <button onClick={() => {handleUpvote( article_id, 1 )}} disabled={upvoteDisabled}>upvote</button>
                    <button onClick={() => {handleDownvote( article_id, -1 )}} disabled={downvoteDisabled}>downvote</button>
                </div>
                <CommentList/>
            </section>
        )
};

export default ArticlePage;