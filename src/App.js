import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome the first session of React!!</h1> */}
      <Home />
      <Contact />
      <About />
    </div>
  );
}

export default App;
