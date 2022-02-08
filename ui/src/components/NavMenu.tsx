import { Container, Navbar, NavbarBrand } from "reactstrap";

export default function NavMenu() {
  return (
    <header>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-primary box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand>Albums Catalog</NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
}
