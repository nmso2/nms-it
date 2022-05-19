import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
}

export default App;
