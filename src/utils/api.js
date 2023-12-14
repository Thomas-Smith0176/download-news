import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://toms-news-server.onrender.com/api"
});

const getArticles = (sortBy='created_at', order='desc') => {
    return newsApi.get(`/articles?sort_by=${sortBy}&&order=${order}`)
};

const getArticleById = (articleId) => {
    console.log(`/articles/${articleId}`)
    return newsApi.get(`/articles/${articleId}`)
};

const getComments = (articleId) => {
    return newsApi.get(`/articles/${articleId}/comments`)
};

const getUsers = () => {
    return newsApi.get("/users")
};

const getTopics = () => {
    return newsApi.get("/topics")
};

const getArticlesByTopic = (topic, sortBy="created_at", order="desc") => {
    return newsApi.get(`/articles?topic=${topic}&&sort_by=${sortBy}&&order=${order}`)
};

const patchArticle = (articleId, incVote) => {
    return newsApi.patch(`/articles/${articleId}`, {inc_votes: incVote})
};

const postComment = (articleId, username, comment) => {
    return newsApi.post(`/articles/${articleId}/comments`, {
        username: username, 
        body: comment
    })
};

const deleteComment = (commentId) => {
    return newsApi.delete(`/comments/${commentId}`)
};

export { getArticles, getArticleById, getComments, getUsers, getTopics, getArticlesByTopic, patchArticle, postComment, deleteComment };