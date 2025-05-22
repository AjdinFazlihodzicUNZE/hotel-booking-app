
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes , Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Contactscreen from './screens/Contactscreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element= {<Homescreen />} />
          <Route path='/book/:roomid' element = {<Bookingscreen />}/>
          <Route path='/register' exact Component={Registerscreen}/>
          <Route path='/login' exact Component={Loginscreen}/>
          <Route path='/contact' exact Component={Contactscreen}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
