import './App.css';

import NavBar from './components/NavBar.js';
import Title from './components/Title.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
