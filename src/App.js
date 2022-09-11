import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Hotel from './pages/Hotel/Hotel';
import Offer from './pages/Offer/Offer';
import PackageDetail from './pages/Package/PackageDetail';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequiredAuth from './pages/Login/RequiredAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyPackages from './pages/Dashboard/MyPackages';
import MyHotel from './pages/Dashboard/MyHotel';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/hotel" element={<Hotel></Hotel>}></Route>
        <Route path="/offer" element={<RequiredAuth>
          <Offer></Offer>
        </RequiredAuth>}></Route>
        <Route path="/dashboard" element={<RequiredAuth>
          <Dashboard></Dashboard>
        </RequiredAuth>}>
          <Route index element={<MyPackages></MyPackages>}></Route>
          <Route path="hotels" element={<MyHotel></MyHotel>}></Route>
        </Route>
        <Route path="/offerDetail/:id" element={<PackageDetail></PackageDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
