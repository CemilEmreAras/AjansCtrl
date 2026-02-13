import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Hakkimizda from '../components/Hakkimizda';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="scroll-smooth bg-black text-white selection:bg-primary selection:text-white">
            <Hero />
            <About />
            <Hakkimizda />
            <Services />
            <Partners />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
