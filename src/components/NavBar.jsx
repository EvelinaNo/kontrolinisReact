import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Knygos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Pagrindinis</Nav.Link>
            <Nav.Link href="/registration">Registruok</Nav.Link>
            <Nav.Link href="/reviews">Atsiliepimai</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
