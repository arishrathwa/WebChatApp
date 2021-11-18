import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from "../actions/auth";
import Feedback from "./Feedback";
const navbar = ({ isAuthenticated, logout, chatState }) => {
    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/login">Login</NavLink>
                {/* NavLinks apply the active class when URL is same as their path */}
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/register">Register</NavLink>
                {/* NavLinks apply the active class when URL is same as their path */}
            </li>
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/dashboard">Update Profile</NavLink>
                {/* NavLinks apply the active class when URL is same as their path */}
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={logout} href="#!">Logout</a>
                {/* NavLinks apply the active class when URL is same as their path */}
            </li>
        </Fragment>
    );
     
    const chatLinks = (
        <Fragment >
           

            <ul class="nav nav-pills nav-fill mx-auto d-flex align-self-start">
                <li class="nav-item">   
                <NavLink className="nav-link " onClick={()=>{console.log("Clicked")}} exact to="/friends">Friends</NavLink>
                    {/* NavLinks apply the active class when URL is same as their path */}
                </li>
                <li class="nav-item">
                <NavLink className="nav-link" onClick={chatState} exact to="/chats">Chats</NavLink>
                </li>
               
            </ul>

        </Fragment>
    );
    let togglerStyle = {
        marginLeft : '3px'
    }    
    return (
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <div className="container-fluid w-50"  style={togglerStyle}>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link className="navbar-brand" exact to="/">ChatAppAuth</Link>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            {/* NavLinks apply the active class when URL is same as their path */}
                        </li>
                        {/* {is user authenticated ? dashboard and logout (authlinks) : login and signup (guestlinks)} */}
                        <div>{isAuthenticated}</div>
                        {isAuthenticated ? authLinks : guestLinks}
                        <li className="nav-item">
                            <Feedback className="nav-link" />
                            {/* NavLinks apply the active class when URL is same as their path */}
                        </li>


                    </ul>
                </div>

            </div>
            {isAuthenticated ? chatLinks : ""}
        </nav>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(navbar);
