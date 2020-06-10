import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./Logo.png";
export default function Navbars() {
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            <Image src={logo} fluid />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto test">
              <Link className="active" to="/">
                HOME
              </Link>
              <Link to="/about">About</Link>
              <Link to="/team">Team</Link>
              <Link to="/news">News</Link>
              <Link to="/contest">Contests</Link>
              <Link to="/pay">Where can you pay with ich</Link>
              <Link to="/find">Find Ich</Link>
              <Link to="/pricing">Price & Chart</Link>
              <Link to="/roadmap">Road map</Link>
              <Link to="/contact">ContactUs</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
