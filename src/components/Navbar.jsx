import React, { useState } from 'react';
import {  Link } from 'react-router-dom';





const NavItem = ({ label, subItems, isContact }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='relative text-white cursor-pointer group'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`group-hover:underline ${isHovered ? 'underline' : ''}`}>
        {label}
      </span>
      {isHovered && subItems && subItems.length > 0 && (
        <div
          className={`absolute top-full left-0 mt-2 ${
            isContact ? 'flex' : 'hidden'
          } bg-white text-black rounded-md p-2 space-y-2 shadow-md`}
        >
          {isContact ? (
            <ContactInfo />
          ) : (
            subItems.map((subItem, index) => (
              <div key={index} className='underline'>
                {subItem}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="border-b-2 py-4 opacity-75 rounded-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <img
          src="/src/assets/download.jpeg"
          alt="logo"
          width={200}
          height={70}
          className="object-cover shadow-md rounded-full"
        />

        {/* Navigation components */}
        <div className="flex space-x-4">
        
        
          <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/sports">Sport</Link>
        <Link to="/tech">Tech</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export { Navbar, NavItem };
