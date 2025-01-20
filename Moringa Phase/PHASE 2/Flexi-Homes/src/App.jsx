import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo-url" alt="FlexiHome" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold text-blue-500">Flexi</h1>
          <h1 className="text-2xl font-bold text-orange-500">Home</h1>
        </div>
        <ul className="flex items-center">
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Explore</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Wishlist</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Trips</a>
          </li>
          <li>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;