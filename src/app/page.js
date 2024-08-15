import Nav from "./components/Menu/page";
import Intro from "./components/Home/page";
import Skills from "./components/Skills/page";
import About from "./components/About/page";
import Projects from "./components/Projects/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}