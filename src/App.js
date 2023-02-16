
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import About from './components/About';
import Testimony from './components/Testimony';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <Navbar />
     <Product />
     <About />
     <Testimony />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
