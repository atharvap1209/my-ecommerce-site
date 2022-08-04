import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import reducer from './reducer';


function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch ({
          type : 'ADD_USER',
          user : authUser
        })
      }else{
        dispatch ({
          type : 'ADD_USER',
          user: null
        })
      }
    })
  
    return () => {
      // Cleanup operations
      unsubscribe();
    }
  }, [])

  console.log("user is", user);
  
  return (
    <Router>
      <div className="app">
        {/* React Router setup */}
        <Switch>
          <Route  path='/' element = {<Home/>}/>
          <Route path = "checkout" element = {<Checkout/>}/>
          <Route path="login" element = {<Login/>}/> 
        </Switch>
      </div>
    </Router>

  );
}

export default App;
