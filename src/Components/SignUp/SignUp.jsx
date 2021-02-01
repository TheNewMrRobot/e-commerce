import React, { Component } from 'react';
import { auth, createUserProfileData } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-Button/Custom-Button';
import FormInput from "../form-input/FormInput";
import "./sign-up.styles.scss"

 class SignUp extends Component {
     constructor(props){
         super(props);
         this.state = {
             email:'',
             password:'',
             confirmPassword:'',
             displayName:''
         }
     }
     handleChange = event =>{
        const {value,name} = event.target
        this.setState({
            [name]:value
        })
    }
     handleSubmit = async event => {
         event.preventDefault();
         const {displayName,email,password,confirmPassword} = this.state;
         if(password !== confirmPassword){
             alert("Passwords Don't Match")
             return;
         }
         try{
             const {user} = await auth.createUserWithEmailAndPassword(email,password);
             await createUserProfileData(user,{displayName})
             this.setState({
                email:'',
                password:'',
                confirmPassword:'',
                displayName:''
             })
         }catch(Err){
             console.log(Err);
         }
     }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <div className="title">I dont have a acoount</div>
                <span>Sign in with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
