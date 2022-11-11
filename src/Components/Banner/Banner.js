import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/Banner/banner.jpg'



const Banner = () => {
    return (
        <header>
            <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                   
                        <h1 className="mb-5 text-white text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-white">Step into an oasis of magnificence we devised for your new beauty center, resort or spa site. We are sure you’ll love your time with Diana.</p>
                        <Link to='/services' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;