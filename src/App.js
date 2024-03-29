import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import NewStudent from "./components/NewStudent";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
import FeaturesPage from "./components/FeaturesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/NewStudent" element={<NewStudent />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FeaturesPage" element={<FeaturesPage />} />
      </Routes>
    </div>
  );
}

export default App;
