import './App.css';
import NavBar from './NavBar.js';
import Title from './Title.js';
import About from './About.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

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
