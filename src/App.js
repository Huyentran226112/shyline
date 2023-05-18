import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from './pages/Shop';
import RoomDetail from './pages/RoomDetail';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
   <>
   <Routes>
     <Route path="/"element={<Home/>}/>
     <Route path="/shop"element={<Shop/>}/>
     <Route path="/roomdetail" element={<RoomDetail/>} />
     <Route path="/checkout" element={<Checkout/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
   </Routes>
   
   
   </>
  );
}

export default App;
