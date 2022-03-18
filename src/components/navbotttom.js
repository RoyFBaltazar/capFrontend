import { Navbar, Container, } from "react-bootstrap"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { logoutUser } from "../actions/actions"
const mapToStateToProps=(state)=>({
    loggedIn: state.loggedIn,
     isLoading: state.isLoading,
     error: state.error
   })
   
const NavBottom=(props)=>{
    let localUsename = localStorage.getItem('username')
    let history = useHistory()
const handleDelete=(e)=>{
    console.log(props.loggedIn)
    ;localStorage.clear()
    logoutUser()
    history.push('/home')
    window.location.reload(false)
}

    return(
        <Navbar sticky="bottom" style={{paddingTop: '9.375em'}}>
  <Container>
    <Navbar.Brand href="#home">tête-à-tête</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    {localUsename ? <Navbar.Text>
        Signed in as: <a href="#login">{localUsename} {''}</a>
      </Navbar.Text>: '' }
    {localUsename ?  <Navbar.Text>
      {''}   Logout <a href="#login" onClick={handleDelete}> here</a>
      </Navbar.Text> : ''}
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default connect(mapToStateToProps,{logoutUser})(NavBottom)