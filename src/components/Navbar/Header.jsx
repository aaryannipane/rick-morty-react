import React from "react";
import { Container, Nav } from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to={"/"} style={{color:"white", textDecoration: "none"}}>RICK & MORTY</Link></Navbar.Brand>
        <Nav>
          <Link to={"/"} style={{color:"white", textDecoration: "none"}}>Home</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
