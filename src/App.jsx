import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import MiNav from './components/nav/NavBar';
import BoxCart from './components/CartContainer/boxCart';


function App() {

  return (
    <>
      < MiNav />

      < BoxCart />

      < ItemListContainer text="PÁGINA EN CONSTRUCCIÓN"/>

    </>
    
  );
}

export default App;

