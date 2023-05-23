import React from 'react';
// import Header from '../includes/Header';
// import Footer from '../includes/Footer';
import Slider from '../components/home/Slider';
import Room from '../components/home/Room';
import About from '../components/home/About';
import Best from '../components/home/Best';
import Testimonials from '../components/home/Testimonials';
import News from '../components/home/News';
import LayoutMaster from '../layouts/LayoutMaster';

function Home(props) {
    return (
        <LayoutMaster>
            <Slider />
            <Room />
            <About />
            <Best />
            <Testimonials />
            <Best />
            <News />
        </LayoutMaster>
    );
}

export default Home;