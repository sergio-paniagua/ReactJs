import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la Tienda Online"}/>
    </>
    
  );
}

export default App;
