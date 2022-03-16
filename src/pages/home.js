
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
 
    return(<div>
        <h1>Tete-a-Tete</h1>
<Post/>
<ListPost tetedata={props.tetedata}/>

    </div>)
}

export default connect(mapToStateToProps, {fetchTete})(Home);