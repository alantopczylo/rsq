import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hero from "./components/Hero";
import Idea from "./components/Idea";
import LetsTalk from "./components/LetsTalk";
import NavBar from "./components/NavBar";
import SelectClients from "./components/SelectClients";
import SliderShow from "./components/SliderShow";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

function App() {
  return (
    <>
      {/* <div className="customcursor">
    <CustomCursor />
    </div> */}

      <div className="App">
        <section className="navbar">
          <NavBar />
        </section>

        <section className="hero blur">
          <Hero />
        </section>

        <section className="slider">
          <SliderShow />
        </section>

        <section className="idea">
          <Idea />
        </section>

        <section className="selectclients">
          <SelectClients />
        </section>

        <section className="letstalk">
          <LetsTalk />
        </section>
      </div>
    </>
  );
}

export default App;
