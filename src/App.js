import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home';

import { useEffect } from 'react';
import Register from './pages/register';
import { fetchTete } from './actions/actions';
import { connect } from 'react-redux';

import Navbartop from './components/navBar';
import NavBottom from './components/navbotttom';
import Login from './pages/login';
import UserHome from './pages/userHome';


const mapToStateToProps=(state)=>({
  tetedata: state.tetedata,
  isLoading: state.isLoading,
  error: state.error,
  loggedIn: state.loggedIn
})

function App(props) {
 

  useEffect(()=>{
    props.fetchTete()
  }, [])
  
  
console.log(props.error)
  return (
    <div className="App">
     
      <Navbartop/><br/>
     {props.error && <h1>{props.error}</h1>}
   <Switch>
   <Route path='/username/:username' component={UserHome}/>
   <Route path='/register' component={Register}/>
    <Route path='/login' component={Login}/>
    { <Route path='/' component={Home}/>}

   </Switch>
   <NavBottom/>
    </div>
  );
}

export default connect(mapToStateToProps, {fetchTete}) (App);
