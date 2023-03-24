import React from 'react';
import "./header.css";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <h2>The-Hub</h2>
      {/* </Link> */}

      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/courses">
            <li>Courses</li>
          </Link>

          <Link to="/recruitment">
            <li>Recruitment</li>
          </Link>

          <Link to="/community">
            <li>Community</li>
          </Link>

          <Link to="/blog">
            <li>Blogs</li>
          </Link>

          <Link to="/apply">
            <button>Apply Now</button>
          </Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Header
