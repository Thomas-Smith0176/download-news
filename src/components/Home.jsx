import ArticleList from './ArticleList';
import { getArticles } from '../utils/api'
import { useState, useEffect } from 'react';

const Home = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        getArticles().then((res) => {
            setArticles(res.data.articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return <ArticleList articles={articles}/>
};

export default Home;