import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartContext } from './Context/CartContext.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <>
    <CartContext.Provider value={[]}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/detalle/:id" component={ItemDetailContainer} />

      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    </>
  </React.StrictMode>,
)


