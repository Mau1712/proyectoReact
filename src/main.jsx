import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <><BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/ItemListContainer" element={<ItemListContainer />} />
        
      </Routes>
    </BrowserRouter></>

    
  </React.StrictMode>,
)


