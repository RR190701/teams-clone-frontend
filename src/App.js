import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './components/home/home';
import Join from './components/join/join';
import VideoChat from './components/videoChat/videoChat';
import SignUp from './components/register/register';
import SignIn from './components/login/login';
import PrivateRoute from './routing/privateRoute';

function App() {
  return (
    <div className="App">
<Router>
  <PrivateRoute exact path="/" component = {Home}/>
  <PrivateRoute exact path ="/join/:roomID" component={Join}/>
  <PrivateRoute exact path = "/meet/:roomID" component={VideoChat}/>
  <Route exact path = "/register" component={SignUp}></Route>
  <Route exact path = "/login" component={SignIn}></Route>
</Router>
    </div>
  );
}

export default App;