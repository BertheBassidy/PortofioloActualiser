import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import  Counter  from "./Components/Counter";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Siklls from './Components/Siklls';



function App() {
  return (
    <div >
       {/* <Counter /> */}
       <NavBar />
       <Home />
       <About />
       <Siklls />
       
       <Contact />
    </div>
  );
}

export default App;
