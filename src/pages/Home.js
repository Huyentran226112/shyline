import React from 'react';
// import Header from '../includes/Header';
// import Footer from '../includes/Footer';
import Slider from '../components/home/Slider';
import Room from '../components/home/Room';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import LayoutMaster from '../layouts/LayoutMaster';

function Home(props) {
    return (
        <LayoutMaster>
            <Slider />
            <Room />
            <About />
            <Testimonials />
        </LayoutMaster>
    );
}

export default Home;