import React from 'react'
import LoginPageStyle from '../styled-components/LoginPageStyle'
import H3 from '../styled-components/H3'

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <H3>zaloguj sie na swoje konto!</H3>
            <div className="login-section">
                <button className='login-section__login-btn'>Login with google</button>
            </div>
        </LoginPageStyle>
    )
}

export default LoginPage
