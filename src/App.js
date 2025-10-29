import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Portfolio/>
     <Services/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
