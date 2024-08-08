import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import flightfront from '../assets/F-12.jpg'
import BlogContent from '../subComponents/Blog/BlogContent';
import PageBanner from './PageBanner';
// import AirportCount from './AirportCount';

function Blog() {
    return (

        <div>



            <PageBanner data={'Blog Post'} />
            <BlogContent />




        </div>

    )
}

export default Blog