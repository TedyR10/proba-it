import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import Modal from "./Modal";
import Button from "./Button";
import Logo from "../assets/logo.png";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function myNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="white">
        <Container className="div">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button
                border="none"
                color="#272A45"
                height="53px"
                onClick={() => console.log("You clicked on the pink circle!")}
                radius="30px"
                width="185px"
                text="white"
                fontfam="Droid Sans"
                fontsty="normal"
                fontwei="normal"
                children="Logare"
              />
              <Button
                border="none"
                color="#272A45"
                height="53px"
                onClick={() => console.log("You clicked on the pink circle!")}
                radius="30px"
                width="185px"
                text="white"
                fontfam="Droid Sans"
                fontsty="normal"
                fontwei="normal"
                children="Creare Cont"
              />
              <Button
                border="none"
                color="#272A45"
                height="53px"
                onClick={() => console.log("You clicked on the pink circle!")}
                radius="30px"
                width="185px"
                text="white"
                fontfam="Droid Sans"
                fontsty="normal"
                fontwei="normal"
                children="Contact"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default myNavbar;
