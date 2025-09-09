import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-gray-900 text-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">My Logo</div>
      <ul className="flex space-x-8">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Services</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
