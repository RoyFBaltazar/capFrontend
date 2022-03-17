import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../actions/actions";
const Login =(props)=>{
  const [intialForm] = useState({
    username: '',
    password: '',
  })
  let history = useHistory()
  const [form, setForm] = useState(intialForm)
  const handleChange=(e)=>{
    console.log(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
  
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    props.loginUser(form)
  setForm(intialForm)
  history.push('/home')
  }
    
    return(<div className="container-md">
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" minLength= "7" placeholder="Password" onChange={handleChange}/>
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
export default connect(null, {loginUser})(Login);
