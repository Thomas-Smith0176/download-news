import ArticleList from './ArticleList';
import { getArticles } from '../utils/api'
import { useState, useEffect, useContext } from 'react';
import { ArticlesContext } from '../contexts/Articles';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {articles, setArticles} = useContext(ArticlesContext)
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()

    useEffect(()=> {
        getArticles(sortBy, order).then((res) => {
            setArticles([...res.data.articles])
            setIsLoading(false)
        })
    }, [sortBy, order])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return <ArticleList articles={articles} setSortBy={setSortBy} setOrder={setOrder}/>
};

export default Home;