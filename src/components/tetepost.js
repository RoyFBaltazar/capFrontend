import { connect } from "react-redux"
import { Card, Container, Row } from "react-bootstrap"

import { fetchTete } from "../actions/actions"
const mapToStateToProps=(state)=>({
    tetedata: state.tetedata,
   
  })
  
  
const Tetepost = (props)=>{
   
   console.log(props.tetedata)
    return(<div>
{props.tetedata.map(post=>{return(<Container key={post._id} fluid  style={{
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
}}>

<Card style={{ width: '50rem' }}>
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