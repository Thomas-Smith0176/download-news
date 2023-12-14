import ArticleCard from './ArticleCard';
import FilterOptions from './FilterOptions';

const ArticleList = ({articles, setSortBy, setOrder}) => {

    return (
        <section className="home">
            <FilterOptions setSortBy={setSortBy} setOrder={setOrder}/>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </section>
    );
};

export default ArticleList;