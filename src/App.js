import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
