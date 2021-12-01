import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logOutTheUser =() => {
    localStorage.setItem("username", "");
    alert("You have been logged out!");
    window.location.reload();
    this.props.history.push('/');
  }
  render() {
    let a = localStorage.getItem("username");
    let loginElement = a ? 'Logout' : 'Login';
    let registerElement = a ? '' : 'Register';
    let profileElement = a ? 'profile' : '';
    return (
      <div className="App">
        <ReactBootstrap.Navbar className="color-nav" variant="light" expand={false}>
          <ReactBootstrap.Container fluid>
            <ReactBootstrap.Navbar.Brand href="#">
              Ask Away
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
            <ReactBootstrap.Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <ReactBootstrap.Offcanvas.Header closeButton>
                <ReactBootstrap.Offcanvas.Title id="offcanvasNavbarLabel">
                  Ask Away
                </ReactBootstrap.Offcanvas.Title>
              </ReactBootstrap.Offcanvas.Header>
              <ReactBootstrap.Offcanvas.Body>
                <ReactBootstrap.Nav className="justify-content-end flex-grow-1 pe-3">
                  <ReactBootstrap.Nav.Link href="/">
                    Home
                  </ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="/profile/:a">
                   {profileElement}
                  </ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="/register">
                   {registerElement}
                  </ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="/login">
                   {loginElement}
                  </ReactBootstrap.Nav.Link>
                  <ReactBootstrap.NavDropdown
                    title="Dropdown"
                    id="offcanvasNavbarDropdown"
                  >
                    <ReactBootstrap.NavDropdown.Item href="/aboutus">
                      About Us
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="/contactus">
                      Contact Us
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Divider />
                    <ReactBootstrap.NavDropdown.Item href="#action5">
                      Privacy and Security
                    </ReactBootstrap.NavDropdown.Item>
                  </ReactBootstrap.NavDropdown>
                </ReactBootstrap.Nav>
                <ReactBootstrap.Form className="d-flex">
                  <ReactBootstrap.FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <ReactBootstrap.Button variant="outline-success">
                    Search
                  </ReactBootstrap.Button>
                </ReactBootstrap.Form>
              </ReactBootstrap.Offcanvas.Body>
            </ReactBootstrap.Navbar.Offcanvas>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
}

export default Navbar;
