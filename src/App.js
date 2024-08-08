
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
import AboutUs from './components/AboutUs';
import OurServicesPage from './components/OurServicesPage';
import PackagePage from './pages/PackagePage';
import AdminPanel from './components/AdminPanel';


function App() {
  return (

    <div className='relative w-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fram})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/" element={<MainHomeComp />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<OurServicesPage />} />
          <Route path='/packages' element={<PackagePage />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/allavailablecharters' element={<AllAvailableCharters />} />
        </Routes>

        <Footer />
      </BrowserRouter>



    </div>

    // <Temp/>


  );
}

export default App;
