import React from "react";

import Navbar, { Nav } from "bootstrap/dist/css/bootstrap.min.css";

const navigationLinks = [
  { name: "home", link: "#" },
  { name: "now playing", link: "#" }
];

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>MusicsfgfsApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {navigationLinks.map((navigationLink) => (
            <Nav href={navigationLink.link}>{navigationLink.name}</Nav>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    //{navigationLinks.map(navigationLink => <li><a href={navigationLink.link}>{navigationLink.name}</a></li> )}
  );
}
export default Navigation;
