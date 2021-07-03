import React from 'react'
import { withRouter } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'

const RgPage = ({history, currentUser}) => {
    if (currentUser) {
        history.goBack()
    }
    return (
        <>
            <div className='register-page'>
                <h2 className='register-page__header'>Welcome!</h2>
                <RegisterForm/>
            </div>
        </>
    )
}
const RegisterPage = withRouter(RgPage)

export { RegisterPage }
