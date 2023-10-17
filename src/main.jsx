import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchContext from './context/SearchContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContext>
    <App />
    </SearchContext>
  </React.StrictMode>,
)
