import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    const contributions = [
        { id: 1, title: 'Oak Tree - Planted on 2024-01-15' },
        { id: 2, title: 'Pine Tree - Planted on 2024-02-10' },
    ];

    return (
        <div className="bg-green-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 px-4 py-6">
                <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Your Contributions</h2>
                <div className="grid grid-cols-1 gap-4">
                    {contributions.map(contribution => (
                        <Card key={contribution.id} title={contribution.title} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;