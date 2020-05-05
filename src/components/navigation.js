import React from "react"

import { Navbar, Nav } from "react-bootstrap"

const Navigation = (props) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className="navbarBrand" href="#">Karan Balani</Navbar.Brand>
            <Navbar.Toggle className="navbarToggle" aria-controls="navbar"><span role="img" aria-label="navbar toggle">💭🔦</span></Navbar.Toggle>
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    <Nav.Link href="/about">About <span role="img" aria-label="about">🙋</span></Nav.Link>
                    <Nav.Link href="#">Projects <span role="img" aria-label="projects">💻</span></Nav.Link>
                    <Nav.Link href="/about">Blog <span role="img" aria-label="blog">✍️</span></Nav.Link>
                    <Nav.Link href="#">Contact <span role="img" aria-label="contact">🍻</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;