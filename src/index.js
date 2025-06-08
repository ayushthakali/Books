import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksContext from './context/books';
import './index.css'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
 <BooksContext.Provider value={{
    
 }}>
   <App/>
 </BooksContext.Provider>
);