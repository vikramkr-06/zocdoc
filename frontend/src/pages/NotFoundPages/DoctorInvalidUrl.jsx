import React from 'react'
import { useNavigate } from 'react-router-dom';

const DoctorNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The page you're looking for is missing.</p>
      <button
        onClick={() => navigate('/doctor')}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default DoctorNotFound