import React from "react";
import Navbar from "react-bootstrap/Navbar"

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img src="https://img.icons8.com/color/50/000000/tribal-symbols.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          The Tribe
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar
