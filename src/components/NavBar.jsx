import React from 'react';

const NavBar = ({ activeCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <span className='navbar-brand mb-0 h1'>
        Active Counters: {activeCounters}
      </span>
    </nav>
  );
};

export default NavBar;
