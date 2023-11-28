import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className="border-b-2 py-4 opacity-75 rounded-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <image className="h-12 w-12 rounded-full" src="/src/assets/download.jpeg" alt="" />
        <div className="flex space-x-4">


          <NavItem
            label="Services"

          />
          <Link to="/News">News</Link>
          <NavItem label="Contact" isContact />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
