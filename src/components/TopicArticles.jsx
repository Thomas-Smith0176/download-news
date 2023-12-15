import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleList from "./ArticleList";
import { useParams } from 'react-router-dom';
import Error from "./Error";

const TopicArticles = () => {
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()
    const [errorThrown, setErrorThrown] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const [errorStatus, setErrorStatus] = useState()
    const {topic} = useParams()

    useEffect(() => {
        getArticlesByTopic(topic, sortBy, order).then((res) => {
            setTopicArticles(res.data.articles)
            setIsLoading(false)
        }).catch((err) => {
            setErrorThrown(true)
            setErrorMsg(err.response.data.msg)
            setErrorStatus(err.response.status)
        })  
    }, [sortBy, order])

    if (errorThrown) {
        return <Error location={'topic'} status={errorStatus} message={errorMsg}/>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    return <>
    <h2>All {topic[0].toUpperCase() + topic.slice(1)} Articles</h2>
    <ArticleList articles={topicArticles} setSortBy={setSortBy} setOrder={setOrder}/>
    </>
};

export default TopicArticles;