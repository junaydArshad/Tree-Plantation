import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="bg-green-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                    Plant a Tree, Grow a Future
                </h1>
                <p className="text-lg md:text-xl text-green-700 text-center max-w-2xl mb-8">
                    Join our mission to create a greener, healthier planet. Every tree you plant makes a difference.
                </p>
                <Button text="Get Started" className="bg-green-600 text-white hover:bg-green-700" onClick={() => { }} />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;