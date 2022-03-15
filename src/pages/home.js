import { connect } from "react-redux";
import Tetepost from "../components/tetepost";

const mapToStateToProps=(state)=>({
    tetedata: state.tetedata,
   
  })
  
const Home =(props)=>{
    console.log(props.tetedata)
    return(<div>
        <h1>Home</h1>
{props.tetedata.map(tete=>{
    return(<>
   <Tetepost tetedata={tete}/>
    </>)
})}

    </div>)
}

export default connect(mapToStateToProps, {}) (Home);