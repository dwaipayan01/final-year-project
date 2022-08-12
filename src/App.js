import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Hotel from './pages/Hotel/Hotel';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/hotel" element={<Hotel></Hotel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
