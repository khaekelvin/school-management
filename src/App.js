import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}

export default App;
