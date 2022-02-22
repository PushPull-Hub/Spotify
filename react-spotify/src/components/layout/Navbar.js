import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-dark bg-success mb-5'>
        <span className='navbar-brand mb-0 h1 mx-auto'>Songify</span>
      </nav>
      <div>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <Link className='nav-link active' to='/'>
              Songs
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/favs'>
              Favorites
            </Link>
          </li>
          <li classNameclass='nav-item'>
            <Link className='nav-link' to='/generator'>
              Generator
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
