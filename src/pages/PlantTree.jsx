import React from 'react';
import Map from '../components/Map';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlantTree = () => {
    return (
        <div className="bg-green-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-4 py-6">
                <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Choose a Location to Plant a Tree</h2>
                < Map />
                <div className="mt-8 text-center">
                    <Button text="Confirm Location" className="bg-green-600 text-white hover:bg-green-700" onClick={() => { }} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PlantTree;
