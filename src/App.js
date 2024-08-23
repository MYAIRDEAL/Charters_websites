
import './App.css';
import MainHomeComp from './components/MainHomeComp';
import { Routes, Route } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar';
import fram from '../src/assets/flightBack.jpg'
import ContactUs from '../src/pages/ContactUs';
import AllAvailableCharters from '../src/pages/AllAvailableCharters';
import Footer from './components/Footer';
import Blog from '../src/pages/Blog'
import AboutUs from './components/AboutUs';
import OurServicesPage from '../src/pages/OurServicesPage';
import PackagePage from './pages/PackagePage';
import AdminPanel from './components/AdminPanel';
import LogUserActivity from './components/LogUserActivity';
import OurFleetsPage from './pages/OurFleetsPage';
import OurFleetsDetails from './pages/OurFleetsDetails';
import DemandSearch from './pages/DemandSearch';
import TestimonialsPage from './pages/TestimonialsPage';


function App() {
  return (

    <div className='relative w-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fram})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      <Router>

        <LogUserActivity /> {/*  Here Comp is used for getting the log of the user */}

        <NavBar />
        <Routes>
          <Route path="/" element={<MainHomeComp />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<OurServicesPage />} />
          <Route path='/packages' element={<PackagePage />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/adminsectioncontroller' element={<AdminPanel />} />
          <Route path='/contactus/:detailsofbooking' element={<ContactUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/allavailablecharters' element={<AllAvailableCharters />} />
          <Route path='/ourfleets/:type' element={<OurFleetsPage />} />
          <Route path='/ourfleetsdetails/:moredetails' element={<OurFleetsDetails />} />
          <Route path='/subcategory/:selecttype' element={<DemandSearch />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </Router>



    </div>

  );
}

export default App;
