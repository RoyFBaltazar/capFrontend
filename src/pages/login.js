import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Login =()=>{
  const [intialForm] = useState({
    username: '',
    password: '',
  })
  const [form, setForm] = useState(intialForm)
  const handleChange=(e)=>{
    console.log(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
  
  }
    return(<div className="container-md">
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" minlength= "7" placeholder="Password" onChange={handleChange}/>
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
export default Login;
