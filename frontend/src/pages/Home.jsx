import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import PhotoGallery from '../components/PhotoGallery';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="pt-0">
            <Hero />
            <Services />
            <About />
            <PhotoGallery />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
