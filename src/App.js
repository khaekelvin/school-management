import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import About from "./components/About";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
