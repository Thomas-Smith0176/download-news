import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleList from "./ArticleList";
import { useParams } from 'react-router-dom';

const TopicArticles = () => {
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {topic} = useParams()
    console.log(topic)

    useEffect(() => {
        getArticlesByTopic(topic).then((res) => {
            setTopicArticles(res.data.articles)
            setIsLoading(false)
        })  
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    return <ArticleList articles={topicArticles}/>
};

export default TopicArticles;