import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddService from "./components/Dashboard/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import Home from "./components/Home/Home/Home";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/addService" element={<AddService />} />
          <Route path="/dashboard/manageService" element={<ManageServices />} />
          <Route exact path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
