import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
