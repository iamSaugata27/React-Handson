import "./App.css";
import About from "./components/About";
import CalculateScore from "./components/CalculateScore";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome the first session of React!!</h1> */}
      {/* <Home />
      <Contact />
      <About /> */}
      <CalculateScore
        Name={"Steeve"}
        School={"DNV Public School"}
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
