import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import NavHeader from './components/NavHeader';
import Topics from './components/TopicsList';
import ArticlePage from './components/ArticlePage';
import TopicArticles from './components/TopicArticles';
import Error from './components/Error';

function App() {
    return (
        <main>
            <Header/>
            <NavHeader/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/topics" element={<Topics/>}/>
            <Route path="/articles/:article_id" element={<ArticlePage/>}/>
            <Route path="/topics/:topic" element={<TopicArticles/>}/>
            <Route path="/*" element={<Error/>}/>
            </Routes>
        </main>
    );  
};

export default App;
