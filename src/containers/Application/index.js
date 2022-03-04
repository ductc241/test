import { Routes, Route } from "react-router-dom";

import { Layout } from 'antd';

import Admin from "../../components/manager/Dashboard";
import Login from "../Login";

import './Application.css'

const Application = () => {
  const { Content } = Layout;
  
  return (
      <>
        <Routes>
          <Route path="dashboard/*" element={<Admin />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </>
    );
}

export default Application