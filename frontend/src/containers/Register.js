import React,{useState} from "react";
import { register } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect ,Link} from "react-router-dom";

import CSRFToken from "../components/CSRFToken";

const Register = ({register,isAuthenticated})=> {

    const [formData, setFormData] = useState({
        username:'',
        password:'',
        re_password:''
    })

    const [accountCreatedStatus,setAccountCreatedStatus] = useState(false)

    const {username,password,re_password} = formData
    
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit = e => {
        e.preventDefault();

        if(password === re_password) {
            //then hit register action
            register(username,password,re_password);
            setAccountCreatedStatus(true);
        }

    }

    if(isAuthenticated)
        return <Redirect exact to='/dashboard'/>
    else if (accountCreatedStatus)
        return <Redirect exact to='/login'/>

    return (
        <div className="container">
            <h1>Register for an Account</h1>
            <p>Enter your profile info..</p>
            <form onSubmit={e=>onSubmit(e)}>
                <CSRFToken/>
                <div className="form-group mt-3">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name="username"
                        id="username" 
                        value={username}
                        onChange={e => onChange(e)} 
                        required/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password"
                        id="password" 
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6' 
                        required/>
                </div><div className="form-group mt-3">
                    <label htmlFor="re_password" className="form-label">
                        Confirm Password:
                    </label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Confirm Password" 
                        name="re_password"
                        id="re_password" 
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6' 
                        required/>
                </div>
                <button className="btn btn-primary mt-3" type='submit'>Register</button>
            </form>
            <p className="mt-3">Already have an account? <Link exact to='/login'>Sign In</Link></p>
        </div>
    );

}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{register})(Register);
