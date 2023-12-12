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

const getUsers = () => {
    return newsApi.get("/users")
};

const patchArticle = (articleId, incVote) => {
    return newsApi.patch(`/articles/${articleId}`, {inc_votes: incVote})
}

const postComment = (articleId, username, comment) => {
    return newsApi.post(`/articles/${articleId}/comments`, {
        username: username, 
        body: comment
    })
};

export { getArticles, getArticleById, getComments, getUsers, patchArticle, postComment };