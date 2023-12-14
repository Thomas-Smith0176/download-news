import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ArticlesProvider } from './contexts/Articles.jsx'
import { UserProvider } from './contexts/User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
    <BrowserRouter>
    <ArticlesProvider>
        <App />
    </ArticlesProvider>
    </BrowserRouter>
    </UserProvider>
)

