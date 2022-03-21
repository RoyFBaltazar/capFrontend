import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { Card, Container,  } from "react-bootstrap"
import Post from '../components/postForm'
const mapToStateToProps=(state)=>({
    tetedata: state.tetedata,
   
  })

const UserHome =(props)=>{

let localUsename = localStorage.getItem('username')
let user = props.tetedata.filter(data=> data.username === localUsename )
console.log(user)
const username = useParams()

    return(<div>
      
        
        <h1>Hey {localUsename}!</h1>
        {localUsename ? '': <h1>Login To See Your Post</h1>}
        {localUsename ?  <Post/> : ''}

       {user.map(posts=>{return(<div>
    {posts.username === username}          
           <Container key={posts._id} fluid  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
<Card style={{ width: '50rem' }}>
<Card.Header>{posts.username}</Card.Header>
<Card.Body>
    <blockquote className="blockquote mb-1">
   <p>   
    {''}
{posts.teteatete}
{''}
</p>  
<footer className="blockquote-footer mb-1">
{posts.nickname} <br/> posted on {posts.created_at}
</footer>
</blockquote>
    </Card.Body>
</Card>
</Container>
       </div>)})}
    
        
    </div>)
}

export default connect(mapToStateToProps,{})(UserHome);