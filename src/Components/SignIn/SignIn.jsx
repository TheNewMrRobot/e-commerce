import React, { Component } from 'react'
import CustomButton from '../Custom-Button/Custom-Button';
import FormInput from '../form-input/FormInput';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.scss"

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
        }
    }
    handleSubmit =async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                    email:'',
                    password:''
            })
        }
        catch(Err){
            console.log(Err);
        }
        
    }
    handleChange = event =>{
        const {value,name} = event.target
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange}/>
                    
                    <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange}/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google </CustomButton>
                    </div>
                    
                </form>

            </div>
        )
    }
}
export default SignIn;