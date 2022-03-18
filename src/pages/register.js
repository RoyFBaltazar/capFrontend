import { useState } from "react";
import { Form, Button} from "react-bootstrap"
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewUser } from "../actions/actions";
const Register =(props)=>{
  const [intialForm] = useState({
    username: '',
    password: '',
    email: '',
    age: 18

  })
  const [form, setForm] = useState(intialForm)
 let history = useHistory()
const handleChange=(e)=>{
  console.log(e.target.value)
  setForm({...form, [e.target.name]: e.target.value})

}
const handleSubmit =(e)=>{
  e.preventDefault()
  props.addNewUser(form)
setForm(intialForm)
history.push('/login')
window.location.reload(false)
}
    return(  <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" minLength="1" placeholder="Enter username" onChange={handleChange}/>
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="email" minLength="1" placeholder="Enter email" onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" minLength="2" name="password" placeholder="Password" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control type="Number" min="0" name="age" placeholder="Your Age"  onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className="mb-3" label="Accept terms of Services" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      
      </Form>)
}
export default connect(null,{addNewUser})(Register);