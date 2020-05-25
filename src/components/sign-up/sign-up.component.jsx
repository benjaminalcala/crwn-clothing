import React from 'react';

import {auth, createUserProfileDoc} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Passwords do not match!');
            return;
        }
        const {user} = auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDoc(user, {displayName})
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })


    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='displayName'
                    value={displayName}
                    type='text'
                    handleChange={this.handleChange}
                    label='display name'
                    required
                />
                <FormInput 
                    name='email'
                    value={email}
                    type='email'
                    handleChange={this.handleChange}
                    label='email'
                    required
                />
                <FormInput 
                    name='password'
                    value={password}
                    type='password'
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
                <FormInput 
                    name='confirmPassword'
                    value={confirmPassword}
                    type='password'
                    handleChange={this.handleChange}
                    label='confirm password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
            </div>
        )
    }

}

export default SignUp;