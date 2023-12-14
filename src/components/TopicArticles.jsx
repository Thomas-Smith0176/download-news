import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleList from "./ArticleList";
import { useParams } from 'react-router-dom';

const TopicArticles = () => {
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()
    const {topic} = useParams()

    useEffect(() => {
        getArticlesByTopic(topic, sortBy, order).then((res) => {
            setTopicArticles(res.data.articles)
            setIsLoading(false)
        })  
    }, [sortBy, order])

    if (isLoading) {
        return <p>Loading...</p>
    }
    return <ArticleList articles={topicArticles} setSortBy={setSortBy} setOrder={setOrder}/>
};

export default TopicArticles;