import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const RegisterForm = () => (
    <div class="login-top sign-top">
        <div class="agileits-login">
        <br />
        <h5>Register</h5>
        <form action="#" method="post">
            <input type="text" name="Username" placeholder="Username" required=""/>
            <input type="email"  name="Email" placeholder="Email" required=""/>
            <input type="password" name="Password" placeholder="Password" required=""/>
            <div class="wthree-text"> 
                <ul> 
                    <li>
                        <label class="anim">
                            <input type="checkbox" class="checkbox" />
                            <span> I accept the terms of use</span> 
                        </label> 
                    </li>
                </ul>
                <div class="clearfix"> </div>
            </div>  
            <div class="w3ls-submit"> 
                <input type="submit" value="Register" />  	
            </div>	
        </form>

        </div>  
    </div>    

)

export const Register = () => {
    return <RegisterForm  />
}
    
export default Register;