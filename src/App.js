import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import About from "./components/About";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";
import Login from "./components/Login";

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
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
