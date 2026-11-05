
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Contactscreen from './screens/Contactscreen';
import Footer from './components/Footer';
import AboutUsscreen from './screens/AboutUsscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="background-image"></div>
      <div className="page-content">
     <Navbar />
     <div className="page-body">
         <Routes>
           <Route path="/" element={<Navigate to="/home" replace />} />
           <Route path="/home" element={<Homescreen />} />
           <Route path="/book/:roomid" element={<Bookingscreen />} />
           <Route path="/register" element={<Registerscreen />} />
           <Route path="/login" element={<Loginscreen />} />
           <Route path="/contact" element={<Contactscreen />} />
           <Route path="/about-us" element={<AboutUsscreen />} />
           <Route path="/profile" element={<Profilescreen />} />
           <Route path="/admin" element={<Adminscreen />} />
        </Routes>
    </div>
    <Footer />
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
