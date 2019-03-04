import React from 'react'
import LoginPageStyle from '../styled-components/LoginPageStyle'
import H3 from '../styled-components/H3'
import PersonIcon from '../styled-components/PersonIcon'
// import GoogleIcon from '../styled-components/GoogleIcon'
import Google from '../img/google.png';

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <span className="login-section--cross"></span>
            <H3>Login to your account!</H3>
            <div className="login-section">
                <div className="login-section__login-iconWrapper"><PersonIcon /></div>
                <p>hello user!</p>
                <div className='login-section__login-btn'><img src={Google} alt="Logo" width='30px' height='30px' />Login with google</div>
                <p>Nie pamietasz hasła?</p>
            </div>
        </LoginPageStyle>
    )
}

export default LoginPage
