import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import "./styles.css"

const NavBar = () => {

  const navigate = useNavigate()

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
          <div onClick={() => navigate('/search')} className='text-light home'>Home</div>
        </NavItem>
        <NavItem>
          <div onClick={() => navigate('/favorites')}  className='text-light favorites ml-2'>Favorites</div>
        </NavItem>
      </Navbar>
    </>
  );
};

export default NavBar
