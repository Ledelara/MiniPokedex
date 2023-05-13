import './App.css';

// Pages
import PokemonDetails from './pages/PokemonDetails';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonDetails />
      <Footer />
    </div>
  );
}

export default App;
