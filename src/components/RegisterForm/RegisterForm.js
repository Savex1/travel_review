import React, {Component} from 'react';
import { FormInput } from '../FormInput/FormInput';
import { auth, createFirebaseUser } from '../../firebase/firebase';

export class RegisterForm extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Passwords dont match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user)

            
            await createFirebaseUser(user, {displayName})
            
            // this.setState({email:'', password: '', confirmPassword: '', displayName:''});
        } catch (err) {
            console.log(err)
        }    
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]:value});
    }

    render () {
        const {displayName, password, confirmPassword, email} = this.state
        return (
            <form className='Register-form' onSubmit={this.handleSubmit}>
                <h2>Please enter your credentials:</h2>
                <FormInput
                    type='text'
                    inputName='displayName'
                    label='Your name:'
                    value={displayName}
                    required
                    onChange={this.handleChange}
                />
                <FormInput
                    type='email'
                    inputName='email'
                    label='Your email:'
                    value={email}
                    required
                    onChange={this.handleChange}
                />
                <FormInput
                    type='password'
                    inputName='password'
                    label='Your password:'
                    value={password}
                    required
                    onChange={this.handleChange}
                />
                <FormInput
                    type='password'
                    inputName='confirmPassword'
                    label='Confirm password:'
                    value={confirmPassword}
                    required
                    onChange={this.handleChange}
                />

                <button type='submit'>Register</button>

            </form>
        )
    }

}


