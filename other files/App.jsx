import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Login from "./Components/Admin/Login/Login";
import NotFound from "./Components/PageNotFound/NotFound";
import Signup from "./Components/Admin/Signup/Signup";
import Asidebar from "./Components/Admin/AsideBar/Asidebar";
import Affiliate from "./Components/Admin/Dashboard/Affiliate/Affiliate";
import Manage from "./Components/Admin/AsideBar/DropdownMenu/Manage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/aside" element={<Asidebar />} />
        <Route path="/admin/aside/dashboard" element={<Dashboard />} />
        <Route path="/admin/aside/affiliate" element={<Affiliate />} />
        <Route path="/admin/aside/affiliate/manage" element={<Manage />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
