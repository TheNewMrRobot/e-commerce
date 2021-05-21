import './App.css';
import React from "react";
import Homepage from './Pages/Homepage/Homepage';
import {Switch,Route,Redirect} from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up-Page/SignInAndSignUp';
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userActions";
import Checkout from './Pages/Checkout/Checkout';
import {selectUserDetails} from "./Redux/User/userSelector"
import { createStructuredSelector } from 'reselect';
import {checkUserSession} from "./Redux/User/userActions"





class App extends React.Component {

  unSubscribeFromAuth = null;
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession()
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
  ),
  checkUserSession: () => dispatch(checkUserSession())
})
const mapStateToProps =createStructuredSelector({
    currentUser:selectUserDetails,
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
