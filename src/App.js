import "./App.css";
import Home from "./components/home/Home";
import Trips from "./pages/trips/Trips";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="trips" element={<Trips />} />
      </Routes>
    </>
  );
}

export default App;
