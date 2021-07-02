import React from 'react'
import { withRouter } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LgPage = ({history, currentUser}) => {
    if (currentUser) {
        history.goBack()
    }
    return (
        <>
            <div className='login-page'>
                <h2 className='login-page_header'>Welcome!</h2>
                <LoginForm/>
            </div>
        </>
    )
}
const LoginPage = withRouter(LgPage)

export { LoginPage }
