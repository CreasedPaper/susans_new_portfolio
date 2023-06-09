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
        <h1>Susan Brethauer</h1>
      </header>
      <NavBar/>
      <div className='bodyContent'>
        <Intro/>
        <p>{'                    '}</p>
        <p>{'                    '}</p>

        <Skills/>
        <p>{'                    '}</p>
        <p>{'                    '}</p>
        
        <Projects/>
        <p>{'                    '}</p>
        <p>{'                    '}</p>

        <Contact/>
        <p>{'                    '}</p>
        <p>{'                    '}</p>
      
      </div>  
    </div>
  );
}

export default App;
