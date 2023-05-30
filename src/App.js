import logo from './logo.svg';
import './App.css';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import NavBar from './sections/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Susan Brethauer's Portfolio</h1>
      </header>
      <NavBar/>
      <div className='bodyContent'>
        <Intro/>
        <Skills/>
        <Contact/>
        <Projects/>
      </div>  
    </div>
  );
}

export default App;
