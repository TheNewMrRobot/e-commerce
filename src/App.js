import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {Switch,Route} from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up-Page/SignInAndSignUp';
import { auth } from "./firebase/firebase.utils";
import { useState,useEffect } from 'react';



function App() {
  const [currentUser, setcurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setcurrentUser(user)
    })  
  })
  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact={true} component={Homepage} path="/"/>  
        <Route exact={true} component={Shop} path="/shop" />
        <Route exact={true} component={SignInAndSignUp} path="/signIn" />
      </Switch>
    </div>
  );
}

export default App;
