import "./App.css";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import BackgroundGrid from "./Components/BackgroundGrid/BackgroundGrid";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Containers/AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BackgroundGrid />
      <Navbar />
      <Routes>
        <Route path="/Interno" element={<Home />} />
        <Route path="/interno/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
