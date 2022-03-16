import { connect } from "react-redux"
import { fetchTete } from "../actions/actions"
import Tetepost from "./tetepost"
import { useEffect } from "react"
const mapToStateToProps=(state)=>({
    tetedata: state.tetedata,
   
  })
  
const ListOfPost =(props)=>{

    useEffect(()=>{
        props.fetchTete()
    
      }, [])
      console.log(props.tetedata)
    return(<div>
       {/* { props.tetedata.length > 0 ? props.tetedata.map(post=>{return(<>
       <Tetepost />
       </>)}): 'loading' }  */}
  
   <Tetepost/>
   
    </div>)
}
export default connect(mapToStateToProps,{fetchTete})(ListOfPost);