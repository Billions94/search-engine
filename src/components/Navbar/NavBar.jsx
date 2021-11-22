import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./styles.css"

const NavBar = () => {
  return (
    <>
      <Navbar className="customBg" variant="dark">
        <Navbar.Brand href="#home">
        <img src="https://img.icons8.com/color/50/000000/tribal-symbols.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
           Tribe
        </Navbar.Brand>
        <NavItem>
          <Link to={'/search'}>
          <div className='text-light'>Home</div>
          </Link>
        </NavItem>
      </Navbar>
    </>
  );
};

export default NavBar
