import ArticleList from './ArticleList';
import { getArticles } from '../utils/api'
import { useState, useEffect, useContext } from 'react';
import { ArticlesContext } from '../contexts/Articles';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {articles, setArticles} = useContext(ArticlesContext)

    useEffect(()=> {
        getArticles().then((res) => {
            setArticles(res.data.articles)
            setIsLoading(false)
        })
    }, [articles])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return <ArticleList articles={articles}/>
};

export default Home;