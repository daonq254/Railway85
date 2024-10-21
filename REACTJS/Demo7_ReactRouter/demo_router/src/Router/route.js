import About from "../Page/About";
import AccountDetail from "../Page/AccountDetail";
import AccountManagement from "../Page/AccountManagement";
import DepartmentManagement from "../Page/DepartmentManagement";
import Home from "../Page/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import { Routes, Route } from "react-router-dom";

export let route = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/AccountManagement" element={<AccountManagement />} />
    <Route path="/DepartmentManagement" element={<DepartmentManagement />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/AccountDetail/:id_param" element={<AccountDetail />} />
  </Routes>
);
