import React, {useEffect, useState} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import './App.css';
import PrivateRoute from './route/privateRoute'
import PublicRoute from './route/publicRoute'

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false);
  const [userInfo , setUserInfo] = useState(null)

    useEffect( ()=> {
        const checkAuth = auth().onAuthStateChanged(async (user) => {
            if (user){
                setAuthenticated(true)
                await setUserInfo(user.toJSON())
                setLoading(false)
            }else {
                setAuthenticated(false)
                setLoading(false)
            }
           });
         return ()=> checkAuth();
    },[])


 return loading === true ? (
     <div className="spinner-border text-success" role="status">
         <span className="sr-only">Loading...</span>
     </div>
    ): (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <PrivateRoute path="/chat" authenticated={authenticated} component={Chat} userInfo={userInfo}  />
          <PublicRoute path="/signup" authenticated={authenticated} component={Signup}  />
          <PublicRoute path="/login" authenticated={authenticated} component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
