import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Players from "./components/Players";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Players />
      <Contact />
    </div>
  );
}

export default App;
