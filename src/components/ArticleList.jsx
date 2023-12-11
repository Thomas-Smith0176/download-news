import ArticleCard from './ArticleCard';

const ArticleList = ({articles}) => {
    
    return (
        <section className="home">
            {articles.map((article) => {
                return <ArticleCard article={article}/>
            })}
        </section>
    );
};

export default ArticleList;