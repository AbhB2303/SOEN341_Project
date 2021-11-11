import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
                  <ReactBootstrap.Nav.Link href="#action2">
                    Link
                  </ReactBootstrap.Nav.Link>
                  <ReactBootstrap.NavDropdown
                    title="Dropdown"
                    id="offcanvasNavbarDropdown"
                  >
                    <ReactBootstrap.NavDropdown.Item href="#action3">
                      Action
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action4">
                      Another action
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Divider />
                    <ReactBootstrap.NavDropdown.Item href="#action5">
                      Something else here
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
