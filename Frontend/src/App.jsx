import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/verify'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopup/LoginPopUp'
import MyOrders from './pages/MyOrders/MyOrders'

// import ServiceSection from "./components/ServiceSection";
import WeddingPage from "./pages/Services/WeddingPage";
import PreWeddingPage from "./pages/Services/PreWeddingPage";
import AnniversaryPage from "./pages/Services/AnniversaryPage";
import BirthdayPage from "./pages/Services/BirthdayPage";
import FuneralPage from "./pages/Services/FuneralPage";
import BabyShowerPage from "./pages/Services/BabyShowerPage";
import CorporatePage from "./pages/Services/CorporatePage";

function App() {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/pre-wedding-shoot" element={<PreWeddingPage />} />
        <Route path="/anniversary" element={<AnniversaryPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/funeral" element={<FuneralPage />} />
        <Route path="/baby-shower" element={<BabyShowerPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
