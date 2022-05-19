import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
