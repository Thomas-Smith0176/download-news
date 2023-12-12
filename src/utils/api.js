import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://toms-news-server.onrender.com/api"
});

const getArticles = () => {
    return newsApi.get('/articles')
};

const getArticleById = (articleId) => {
    return newsApi.get(`/articles/${articleId}`)
};

const getComments = (articleId) => {
    return newsApi.get(`/articles/${articleId}/comments`)
};

export { getArticles, getArticleById, getComments };