import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ position: "fixed", width: "100%", zIndex: "100", top: 0 }}
    >
      <Container fluid>
        {" "}
        {/* Utiliza Container fluid para ocupar todo el ancho */}
        <Navbar.Brand href="#home">Mi Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {" "}
          {/* Utiliza justify-content-end para alinear el contenido a la derecha */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Enlace</Nav.Link>
            <NavDropdown title="Desplegable" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Otra acción
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Algo más</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Enlace separado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
