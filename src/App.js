import "./App.css";
import Home from "./components/Home";
import Nermucum from "./components/Nermucum";
import Hetadardz from "./components/Hetadardz";
import WhoAreWe from "./components/WhoAreWe";
import News from "./components/News";
import Description from "./components/Description";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Nermucum />
      <Hetadardz />
      <WhoAreWe />
      <News />
      <Description />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
