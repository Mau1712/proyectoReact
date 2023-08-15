
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MiNav from './components/nav/NavBar';
import CardItem from './components/CardItem/CardItem';
import data from './data/itemList.json'

function App() {

  return (
    <>
      <MiNav />

      <ItemListContainer>
        {data.map(item =>
          <CardItem
            key={item.id}
            imagen={item.imagen}
            nombre={item.Titulo}
            precio={item.Precio}
            categoria={item.categoria}
          />
        )}
      </ItemListContainer>


    </>





  );
}

export default App;

