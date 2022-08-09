import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
