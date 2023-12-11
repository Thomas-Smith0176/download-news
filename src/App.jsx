import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import NavFooter from './components/NavFooter';
import NavHeader from './components/NavHeader';
import Topics from './components/Topics';

function App() {
    return (
        <>
        <Header/>
        <NavHeader/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topics" element={<Topics/>}/>
        </Routes>
        <NavFooter/>
        </>
    );  
};

export default App;
