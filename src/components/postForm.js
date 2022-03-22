import Form from 'react-bootstrap/Form'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { newPost } from '../actions/actions';
import { useState } from 'react';
import { connect } from 'react-redux';

const Post=(props)=>{

const [intialForm] = useState({
  username: localStorage.getItem('username'),
  nickname: '',
  teteatete: '',
  private: false


})
  // const username = localStorage.getItem('username')
  const [form, setForm] = useState(intialForm)

  const handleChange=(e)=>{
    console.log(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
  
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
    props.newPost(form)
    setForm(intialForm)
    
  }

    return(<div>
   <Form onSubmit={handleSubmit}>
  <Row className="align-items-center">
    <Col xs={8}>
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Post
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Let's Talk"
        name="teteatete"
        required={true}
        onChange={handleChange}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>#</InputGroup.Text>
        <FormControl id="inlineFormInputGroup"  name="nickname" required={true} placeholder="nickname" onChange={handleChange} />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        name="private"
        value={true}
        label="Private"
        onChange={handleChange}
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Post
      </Button>
    </Col>
  </Row>
</Form>
    </div>)
}
export default connect(null, {newPost}) (Post);