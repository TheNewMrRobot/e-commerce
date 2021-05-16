import './App.css';
import React from "react";
import Homepage from './Pages/Homepage/Homepage';
import {Switch,Route,Redirect} from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up-Page/SignInAndSignUp';
import { auth } from "./firebase/firebase.utils";
import { createUserProfileData } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userActions";
import Checkout from './Pages/Checkout/Checkout';
import {selectUserDetails} from "./Redux/User/userSelector"
import { createStructuredSelector } from 'reselect';




class App extends React.Component {

  unSubscribeFromAuth = null;
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  componentDidMount(){
    // collectionsArray
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
      }
      setCurrentUser(userAuth)
      // addCollectionAndItems("collections",collectionsArray.map(({title,items})=>({title,items})))
    });
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} component={Homepage} path="/"/>  
          <Route component={Shop} path="/shop" />
          <Route exact={true} component={Checkout} path="/checkout"/>
          <Route exact={true} path="/signIn" render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)} />
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
const mapStateToProps =createStructuredSelector({
    currentUser:selectUserDetails,
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
