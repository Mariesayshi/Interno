import "./App.css";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import BackgroundGrid from "./Components/BackgroundGrid/BackgroundGrid";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <BackgroundGrid />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
