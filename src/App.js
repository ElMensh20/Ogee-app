import './App.scss';
import React from 'react';
import Rooms from './Pages/Rooms/Rooms';
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Rooms />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
