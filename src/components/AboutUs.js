import React from 'react'
import PageBanner from './PageBanner'
import AboutFlight from './AboutFlight'
import OurServices from './OurServices'
import AirportCount from './AirportCount'
import LearnMore from './LearnMore'
import Testimonials from './Testimonials'

function AboutUs() {
    return (


        <div>
            <PageBanner data={'About Us'} />
            <AboutFlight />
            <OurServices/>
            <AirportCount/>
            <LearnMore/>
            <Testimonials/>
        </div>



    )
}

export default AboutUs