import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Link from 'next/link';

const TopNavbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Help Me Find x</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}>
        <Link href="/about">About</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        Contact
      </NavItem>
    </Nav>
  </Navbar>
)

export default TopNavbar;