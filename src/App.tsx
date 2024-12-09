// Desc: Main component of the application which contains all the other components.
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import TutorialList from './components/Tutorials/TutorialList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <TutorialList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;