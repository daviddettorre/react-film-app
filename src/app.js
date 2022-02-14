
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";

const app = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="user" element={<User />} />
    </Routes>
    </BrowserRouter>
  );
};

export default app;
