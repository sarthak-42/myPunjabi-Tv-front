import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  const headCenterStyle = {
    textAlign: 'center',
    fontSize: '15rem',
    paddingTop: '4rem',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    color: '#020024',
    marginTop: '10px'
  };

  const headCenter2Style = {
    textAlign: 'center',
    fontSize: '25px',
    paddingTop: '1rem',
    color: '#020024'
  };

  const para1Style = {
    width: '30%',
    textJustify: 'auto',
    textAlign: 'center',
    color: '#020024',
    paddingTop: '1rem',
    margin: '0 auto'
  };

  const goHomeStyle = {
    width: '11rem',
    height: '2.7rem',
    borderRadius: '26px',
    display: 'block',
    margin: 'auto',
    backgroundColor: 'blue',
    border: '1px solid blue',
    fontSize: '14px',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    cursor: 'pointer',
    // backgroundColor: 'linear-gradient(to bottom, #ff4500, #ff8c00)',
    marginTop: '10px'
  };

  const goHomeLinkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <div>
      <div className="container">
        <h1 style={headCenterStyle}>Oops!</h1>
        <h2 style={headCenter2Style}>404 - Page Not Found</h2>
        <div className="div-para">
          <p style={para1Style}>
            The page you are looking for might have been removed, had its name changed, or is under maintenance.
          </p>
        </div>
      </div>
      <button style={goHomeStyle}>
        <Link to="/" style={goHomeLinkStyle}>Go to Homepage</Link>
      </button>
    </div>
  );
}

export default NotFound;
