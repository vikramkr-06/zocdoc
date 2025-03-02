import React from "react";
import { useNavigate } from "react-router-dom";

const UserNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Sorry, this page does not exist.</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default UserNotFound;