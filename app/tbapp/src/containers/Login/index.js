import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { tryLogin, tryLogout } from '../../actions';

export const LoginForm = ({tryLogin, auth}) => (
    <div class="login-top sign-top">
        <div class="agileits-login">
        <br />
        <h5>Login</h5>
        <form action="#" method="post">
            <input type="email" class="email" name="Email" placeholder="Email" required=""/>
            <input type="password" class="password" name="Password" placeholder="Password" required=""/>
            <div class="wthree-text"> 
                <ul> 
                    <li>
                        <label class="anim">
                            <input type="checkbox" class="checkbox" />
                            <span> Remember me ?</span> 
                        </label> 
                    </li>
                    <li> <a href="#">Forgot password?</a> </li>
                </ul>
                <div class="clearfix"> </div>
            </div>  
            <div class="w3ls-submit"> 
                <input type="submit" value="LOGIN" />  	
            </div>	
        </form>

        </div>  
    </div>

)

export const Login = ({tryLogin, logout, auth}) => {
    console.log(tryLogout);
    if(auth.isLoggedIn) {
        return (<div>
            <h2>Hi {auth.userData.username}!</h2>
            <button onClick={logout}>Logout</button>
        </div>  
        );
    } else {
        return <LoginForm tryLogin={tryLogin} auth={auth} />
    }

}
    

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    tryLogin: (env) => {
        const username = env.target.querySelector("input#email").value;
        const password = env.target.querySelector("input#password").value;

        console.log(username)
        console.log(password)

        dispatch(tryLogin({username, password}))
    },
    logout: () => dispatch(tryLogout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login)