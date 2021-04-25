import './App.css';
import Navbar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Portifolio from './pages/Portifolio.js'
import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component ={Home} />
      <Route exact path="/About" component ={About} />
      <Route exact path="/Portifolio" component ={Portifolio} />
      <Footer />
      
    </div>
  );
}

export default App;
