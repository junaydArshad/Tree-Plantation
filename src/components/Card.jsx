import React from 'react';

const Card = ({ title, progress }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-green-800">{title}</h3>
            {progress !== undefined && (
                <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className="bg-green-600 h-4 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-green-700 mt-1">{progress}% Complete</p>
                </div>
            )}
        </div>
    );
};

export default Card;
