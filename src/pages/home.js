
import ListOfPost from "../components/listPost";
import Post from "../components/postForm";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTete } from "../actions/actions";
import ListPost from "../components/listPost";

const mapToStateToProps=(state)=>({
    tetedata: state.tetedata,
    isloading: state.isloading,
    error: state.error
   
  })
  
const Home =(props)=>{
    

    useEffect(()=>{
        props.fetchTete()
    
      }, [])
      let localUsename = localStorage.getItem('username')
    return(<div>
        <h1>Tête-à-Tête</h1>
        {localUsename ? <h3>Hey {localUsename}!</h3> : ''}
        {localUsename ?  <Post/> : <h1>Login To Post</h1>}
<ListPost tetedata={props.tetedata}/>

    </div>)
}

export default connect(mapToStateToProps, {fetchTete})(Home);