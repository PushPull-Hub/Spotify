import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ tabs, setToActive }) => {
  if (tabs) {
    return (
      <React.Fragment>
        <nav className='navbar navbar-dark bg-success mb-5'>
          <span className='navbar-brand mb-0 h1 mx-auto'>Songify</span>
        </nav>
        <div className='container'>
          <ul className='nav nav-tabs'>
            {tabs.map((tab, index) => (
              <li
                className={'nav-item'}
                key={index}
                onClick={() => {
                  setToActive(tab);
                }}
              >
                <Link className='nav-link' to={tab.itsPage}>
                  {' '}
                  {tab.title}{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};
export default Navbar;
