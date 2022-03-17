import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
const mapToStateToProps=(state)=>({
 loggedIn: state.loggedIn,
  isLoading: state.isLoading,
  error: state.error
})
const Navbartop=(props)=>{
  let localUsename = localStorage.getItem('username')
 
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/home'>Tête-à-Tête</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link as={Link} to="/username/:username" >My Post</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://github.com/RoyFBaltazar/capFrontend">Github</NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/in/roy-baltazar-9b42a5228/">LinkedIn</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Login</Nav.Link> 
      
      {localUsename = '' ? '': <Nav.Link eventKey={2} as={Link} to='/register'>
        Register
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
 export default connect(mapToStateToProps,{})(Navbartop)