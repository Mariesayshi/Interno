import "./App.css";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import BackgroundGrid from "./Components/BackgroundGrid/BackgroundGrid";
function App() {
  return (
    <>
    <BackgroundGrid/>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
