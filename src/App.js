import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import  Counter  from "./Components/Counter";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Siklls from './Components/Siklls';
import Project from './Components/Project';
import Work from './Components/Work';
import Footer from './Components/Footer';



function App() {
  return (
    <div >
       {/* <Counter /> */}
       <NavBar />
       <Home />
       <About />
       <Siklls />
       <Work />
       {/* <Project /> */}
       
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
