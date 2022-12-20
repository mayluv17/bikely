import "./App.css";
import Home from "./components/home/Home";
import Trips from "./pages/trips/Trips";
import Stations from "./pages/stations/stations";
import Viewstation from "./pages/viewstation/viewstation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="trips" element={<Trips />} />
        <Route exact path="stations" element={<Stations />} />
        <Route exact path="viewstation" element={<Viewstation />} />
      </Routes>
    </>
  );
}

export default App;
