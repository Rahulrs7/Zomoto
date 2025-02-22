import React from 'react';

const NavBar = ({ showLoginHandler, showRegisterHandler, showLogOut, logOutHandler }) => {
  const firmName = localStorage.getItem('firmName');

  return (
    <div className="navSection">
      <div className="logo">
        <img src="/assets/logo.jpg" alt="logo" />
      </div>
      <div className="company">
        <strong>Vendor Dashboard</strong> <span className="firmName"> | {firmName ? firmName : "Not Registered"}</span>
      </div>
      <div className="userAuth">
        {!showLogOut ? (
          <>
            <span onClick={showLoginHandler}>Login</span> / 
            <span onClick={showRegisterHandler}>Register</span>
          </>
        ) : (
          <span onClick={logOutHandler} className="logout">Logout</span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
