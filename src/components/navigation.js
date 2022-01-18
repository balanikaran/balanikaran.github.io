import React from "react"

import { Navbar, Nav } from "react-bootstrap"

const Navigation = () => {
  const scrollToSection = sectionId => {
    document.getElementById(sectionId).scrollIntoView()
  }

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand className="navbarBrand">Karan Balani</Navbar.Brand>
      <Navbar.Toggle className="navbarToggle" aria-controls="navbar">
        <span role="img" aria-label="navbar toggle">
          💭🔦
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => scrollToSection("aboutSectionId")}
            href="#"
            className="navLink"
          >
            About{" "}
            <span role="img" aria-label="about">
              🙋
            </span>
          </Nav.Link>
          <Nav.Link
            onClick={() => scrollToSection("projectsSectionId")}
            href="#"
            className="navLink"
          >
            Projects{" "}
            <span role="img" aria-label="projects">
              💻
            </span>
          </Nav.Link>
          <Nav.Link
            onClick={() => scrollToSection("contactSectionId")}
            href="#"
            className="navLink"
          >
            Contact{" "}
            <span role="img" aria-label="contact">
              🍻
            </span>
          </Nav.Link>
          <Nav.Link
            href="https://sevenbits.hashnode.dev/"
            target={"_blank"}
            rel={"noopener noreferrer"}
            className="navLink"
          >
            Blog{" "}
            <span role="img" aria-label="blog">
              ✍️
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
