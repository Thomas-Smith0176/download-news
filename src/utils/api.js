import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://toms-news-server.onrender.com/api"
})

const getArticles = () => {
    return newsApi.get('/articles')
};

export default getArticles