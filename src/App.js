
import './App.css';
import MainHomeComp from './components/MainHomeComp';
import { Routes, Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar';
import fram from '../src/assets/flightBack.jpg'
import ContactUs from './components/ContactUs';
import AllAvailableCharters from './components/AllAvailableCharters';
import Footer from './components/Footer';
import Blog from './components/Blog'


function App() {
  return (

    <div className='relative w-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fram})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/" element={<MainHomeComp />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/allavailablecharters' element={<AllAvailableCharters />} />
        </Routes>

        <Footer />
      </BrowserRouter>



    </div>

    // <Temp/>


  );
}

export default App;
