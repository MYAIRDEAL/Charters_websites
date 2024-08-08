import React from 'react'

import NavHeroBar from './NavHeroBar';
import OurServices from './OurServices';
import AboutFlight from './AboutFlight';
import LearnMore from './LearnMore';
import AirportCount from './AirportCount';
import LuxuryCharter from './LuxuryCharter';
import Testimonials from './Testimonials';
import OurPackage from './OurPackage';
import ShowEstimates from './ShowEstimates';
import PushSearchRes from './PushSearchRes';







function MainHomeComp() {
    return (
            <div>
                <NavHeroBar />
                <ShowEstimates />
                <OurServices />
                <AboutFlight />
                <LearnMore />
                <AirportCount />
                {/* <LuxuryCharter /> */}
                <PushSearchRes/>
                <Testimonials />
                <OurPackage />
            </div>

       

    )
}

export default MainHomeComp