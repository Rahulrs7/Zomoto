import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>QUICK</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="userAuth">
        {/* Links to Login and Register */}
        <Link to="/login" className="authLink">Login</Link> | 
        <Link to="/register" className="authLink">Register</Link>
      </div>
    </section>
  );
};

export default TopBar;
