import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./styles.css"

const NavBar = () => {
  return (
    <>
      <Navbar className="customBg sticky-top" variant="dark">
        <Link to={'/search'}>
        <Navbar.Brand >
        <img src="https://img.icons8.com/color/50/000000/tribal-symbols.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
           Tribe
        </Navbar.Brand>
        </Link>
        <NavItem>
          <Link className='home' to={'/search'}>
          <div className='text-light home'>Home</div>
          </Link>
        </NavItem>
      </Navbar>
    </>
  );
};

export default NavBar
