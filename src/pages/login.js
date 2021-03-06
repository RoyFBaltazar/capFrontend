import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../actions/actions";


const mapToStateToProps=(state)=>({

  error: state.error,
  loggedIn: state.loggedIn
})



const Login =(props)=>{
  const [intialForm] = useState({
    username: '',
    password: '',
  })
  let history = useHistory()
  const [form, setForm] = useState(intialForm)
  const handleChange=(e)=>{
    
    setForm({...form, [e.target.name]: e.target.value})
  
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    props.loginUser(form)
  setForm(intialForm)
  console.log(props.error)
  if(props.error){
    console.log(props.error)
    alert('check username or password')
    history.push('/login')
  }
  else{history.push('/home')
  // window.location.reload(false)
}
  }
    
    return(<div className="container-md">
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" required={true} minLength={2} onChange={handleChange} />
          <Form.Text className="text-muted">
            check username
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" minLength= {2} required={true}  placeholder="Password" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      
      </Form>
     </div>
      )
}
export default connect(mapToStateToProps, {loginUser})(Login);
