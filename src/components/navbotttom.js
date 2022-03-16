import { Navbar, Container, } from "react-bootstrap"
const NavBottom=()=>{
    return(
        <Navbar sticky="bottom" style={{paddingTop: '9.375em'}}>
  <Container>
    <Navbar.Brand href="#home">tête-à-tête</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Roy</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default NavBottom