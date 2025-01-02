import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TrackProgress = () => {
    const trees = [
        { id: 1, name: 'Oak Tree', progress: 70 },
        { id: 2, name: 'Pine Tree', progress: 40 },
        { id: 3, name: 'Maple Tree', progress: 90 },
    ];

    return (
        <div className="bg-green-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 px-4 py-6">
                <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Track Your Tree's Growth</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trees.map(tree => (
                        <Card key={tree.id} title={tree.name} progress={tree.progress} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TrackProgress;