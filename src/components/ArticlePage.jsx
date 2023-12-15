import { useParams } from 'react-router-dom';
import { getArticleById, patchArticle } from '../utils/api';
import { useEffect, useState } from 'react';
import CommentList from './CommentsList';
import parseDate from '../utils/dates';
import { Accordion, ToastContainer } from 'react-bootstrap';
import ErrorToast from './ErrorToast';
import Error from './Error';
import UserAvatar from './UserAvatar';


const ArticlePage = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState()
    const [author, setAuthor] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)
    const [upvoteDisabled, setUpvoteDisabled] = useState(false)
    const [downvoteDisabled, setDownvoteDisabled] = useState(false)
    const [upvoteClick, setUpvoteClick] = useState(false)
    const [downvoteClick, setDownvoteClick] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [errStatus, setErrorStatus] = useState()
    const [errorThrown, setErrorThrown] = useState(false)

    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res.data.article)
            setVotes(res.data.article.votes)
            setIsLoading(false)
        })
        .catch((err) => {
            setErrorThrown(true)
            setErrorMsg(err.response.data.msg)
            setErrorStatus(err.response.status)
        })
    }, [])


    function handleUpvote( article_id, incVote) {
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
        patchArticle(article_id, incVote).catch(() => {
            setVotes((currVotes) => currVotes - incVote)
            setUpvoteDisabled(false)
            setDownvoteDisabled(false)
            setShowError(true)
            setErrorMsg('Upvote failed')
        })
    }

    function handleDownvote (article_id, incVote) {
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
        patchArticle(article_id, incVote).catch(() => {
            setVotes((currVotes) => currVotes - incVote)
            setUpvoteDisabled(false)
            setDownvoteDisabled(false)
            setShowError(true)
            setErrorMsg('Downvote failed')
        })
    }
    
    if(errorThrown) {
        return <Error location={'article'} status={errStatus} message={errorMsg}/>
    }
    
    if (isLoading) {
        return <p>Loading...</p>
    }

    
        return (
            <section className='article-page'>
                <div className='article-page-data'>
                <h2>{article.title}</h2>
                <h3>By {article.author}</h3>
                <UserAvatar username={article.author}/>
                <p>{`uploaded ${parseDate(article.created_at)}`}</p>
                </div>
                <img className="article-page-img" src={article.article_img_url} alt={`cover imgage for ${article.title}`}></img>
                <p className='article-page-body'>{article.body}</p>
                <div className="article-page-votes">   
                    {votes === 1 && <p className='vote-count'>{votes} vote</p>}
                    {votes !== 1 && <p className='vote-count'>{votes} votes</p>}
                    <button onClick={() => {handleUpvote( article_id, 1 )}} disabled={upvoteDisabled} className='vote-button'>upvote</button>
                    <button onClick={() => {handleDownvote( article_id, -1 )}} disabled={downvoteDisabled} className='vote-button'>downvote</button>
                </div>
                <Accordion defaultActiveKey="0" className="comments">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Comments</Accordion.Header>
                    <Accordion.Body>
                <CommentList setShowError={setShowError} setErrorMsg={setErrorMsg}/>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <ToastContainer position='middle-center' containerPosition='fixed'>
                    <ErrorToast setShowError={setShowError} showError={showError} errorMsg={errorMsg}/>
                </ToastContainer>
            </section>
        )
};

export default ArticlePage;