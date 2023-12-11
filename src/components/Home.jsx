import ArticleList from './ArticleList';
import getArticles from '../utils/api'
import { useState } from 'react';

const Home = () => {
    const [articles, setArticles] = useState([])

    getArticles().then((res) => {
        setArticles(res.data.articles)
    })

    return <ArticleList articles={articles}/>
};

export default Home;