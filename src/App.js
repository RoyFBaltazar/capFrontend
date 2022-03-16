import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import UserDetail from './components/user';
import { useEffect } from 'react';
import Register from './pages/register';
import { fetchTete } from './actions/actions';
import { connect } from 'react-redux';

import Navbartop from './components/navBar';
import NavBottom from './components/navbotttom';

const mapToStateToProps=(state)=>({
  tetedata: state.tetedata,
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {

  useEffect(()=>{
    props.fetchTete()
  }, [])
  
  
console.log(props.tetedata)
  return (
    <div className="App">
     
      {/* <Register/> */}
      <Navbartop/>
   <Switch>
   <Route path='/username/:username' component={UserDetail}/>
   <Route path='/register' component={Register}/>
     
    { <Route path='/' component={Home}/>}

   </Switch>
   <NavBottom/>
    </div>
  );
}

export default connect(mapToStateToProps, {fetchTete}) (App);
