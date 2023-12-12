import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import NavFooter from './components/NavFooter';
import NavHeader from './components/NavHeader';
import Topics from './components/Topics';
import ArticlePage from './components/ArticlePage';

function App() {
    return (
        <main>
            <Header/>
            <NavHeader/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/topics" element={<Topics/>}/>
            <Route path="/articles/:article_id" element={<ArticlePage/>}/>
            </Routes>
            <NavFooter/>
        </main>
    );  
};

export default App;
