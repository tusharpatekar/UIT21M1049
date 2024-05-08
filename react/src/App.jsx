import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './Componets/AllProducts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
       
      </Routes>
    </Router>
  );
}

export default App;
