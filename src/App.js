
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Hotel from './pages/Hotel/Hotel';
import Offer from './pages/Offer/Offer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/hotel" element={<Hotel></Hotel>}></Route>
        <Route path="/offer" element={<Offer></Offer>}></Route>
        <Route path="/offerDetail:id"></Route>
      </Routes>
    </div>
  );
}

export default App;
