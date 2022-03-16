import { connect } from "react-redux"
import { Card, Container } from "react-bootstrap"

import { fetchTete } from "../actions/actions"
const mapToStateToProps=(state)=>({
    tetedata: state.tetedata,
   
  })
  
  
const Tetepost = (props)=>{
    console.log(props.tetedata.data)
   
    return(<div>
{props.tetedata.map(post=>{return(<Container fluid  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
<Card style={{ width: '22rem' }}>
<Card.Header>{post.username}</Card.Header>
<Card.Body>
    <blockquote className="blockquote mb-1">
   <p>   
    {''}
{post.teteatete}
{''}
</p>  
<footer className="blockquote-footer mb-1">
{post.nickname} <br/> posted on {post.created_at}
</footer>
</blockquote>
    </Card.Body>
</Card>
</Container>)})}

    </div>)
}
export default connect(mapToStateToProps, {})(Tetepost);