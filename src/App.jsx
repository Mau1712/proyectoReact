
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import MiNav from './components/nav/NavBar';

function App() {

  return (
    <>
      <MiNav />
      <ItemListContainer />
      <ItemDetailContainer/>

    </>
  );
}

export default App;

