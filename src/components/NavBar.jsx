import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">TLC Members' Club</Navbar.Brand>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Benefits</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/home">Weekly Coaching</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/home">Monthly Workshops</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/home">Holiday Campus</Nav.Link>
    </Nav.Item>
  </Nav>
      </Container>
</Navbar>
  )
}

export default NavBar