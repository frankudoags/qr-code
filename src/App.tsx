
import React from 'react';
import { Navbar, Home, QRComponent } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QRComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;