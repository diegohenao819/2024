import "./app.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import Projects from "./components/portfolio/Projects";

function App() {
  return (
    <>
      <section>
        <NavBar />
        <Hero />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;
