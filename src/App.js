import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"; // Importamos el componente Button de bootstrap
import './App.css';
import './stylesheets/card.css'
import './stylesheets/body.css'
import './stylesheets/header.css'
import './stylesheets/footer.css'
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Img1 from './img/bulbasaur.png'
import Img2 from './img/charmander.png'
import Img3 from './img/squirtle.png'


function App() {
  return (
    <div className="App">
        <Header title="Galería de Imágenes con React" />
        <div className='card-container'>
          <Cards 
          img={Img1}
          title="Bulbasaur"
          description="Desde que nace, crece alimentándose de los nutrientes que contiene la semilla de su lomo." 
          />
          <Cards 
          img={Img2}
          title="Charmander"
          description="Este Pokémon nace con una llama en la punta de la cola. Si se le apagara, fallecería."
          />
          <Cards 
          img={Img3}
          title="Squirtle"
          description="Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble."
          />
      </div>

      <div className='footer'><Footer /></div>
        
    </div>
  );
}

export default App;
