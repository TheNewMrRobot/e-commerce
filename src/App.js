import './App.css';
import React from "react";
import Homepage from './Pages/Homepage/Homepage';
import {Switch,Route} from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up-Page/SignInAndSignUp';
import { auth } from "./firebase/firebase.utils";
import { createUserProfileData } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userActions";




class App extends React.Component {

  unSubscribeFromAuth = null;

 

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  componentDidMount(){
    const {setCurrentUser} = this.props;
   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileData(userAuth);
        await userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
        setCurrentUser(userAuth)
      }
    })  
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} component={Homepage} path="/"/>  
          <Route exact={true} component={Shop} path="/shop" />
          <Route exact={true} component={SignInAndSignUp} path="/signIn" />
        </Switch>
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(
    setCurrentUser(user)
  )
})

export default connect(null,mapDispatchToProps)(App);
