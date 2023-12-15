import { useContext } from 'react';
import ArticleCard from './ArticleCard';
import FilterOptions from './FilterOptions';
import { UserContext } from '../contexts/User';

const ArticleList = ({articles, setSortBy, sortBy, setOrder}) => {

    const {currUser, setCurrUser} = useContext(UserContext)

    console.log(currUser)

    return (
        <section className="home">
            <FilterOptions setSortBy={setSortBy} sortBy={sortBy} setOrder={setOrder}/>
            <div className="article-list">    
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
            </div>
        </section>
    );
};

export default ArticleList;