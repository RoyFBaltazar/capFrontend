import Form from 'react-bootstrap/Form'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const Post=(props)=>{
    return(<div>
   <Form>
  <Row className="align-items-center">
    <Col xs={8}>
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Post
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Let's Talk"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>#</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="nickname" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Private"
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
export default Post;