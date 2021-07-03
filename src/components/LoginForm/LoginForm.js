import React, { Component } from 'react';
import { auth, googleLogin } from '../../firebase/firebase';
import { FormInput } from '../FormInput/FormInput';
import { Link } from 'react-router-dom';

export  class LoginForm extends Component {
    state = {
        login: '',
        password: '',
        email: '',
    }

    handleChange = ({target: {name, value}}) => {
        console.log(name, value)
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        e.prevendDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <>
                <form className='login-form' >
                    <FormInput
                        label = 'Login:'
                        type = 'email'
                        inputName = 'login'
                        placeholder = 'Enter your login'
                        value = {this.state.login}
                        required
                        changeHandler={this.handleChange}
                    />
                    <FormInput
                        label = 'Password:'
                        type = 'password'
                        inputName = 'password'
                        placeholder = 'Enter your password'
                        value = {this.state.password}
                        required
                        changeHandler={this.handleChange}
                    />
                    <button type='submit'>Log in</button>
                    <button onClick={googleLogin}>Login with Google</button>
                </form>
                <div>
                    <Link to='/register'exact>I dont have an account</Link>
                </div>
            </>
        )
    }
}
