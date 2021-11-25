import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from "../actions/auth";
import Feedback from "./Feedback";
import Notification from './Notifications'
const navbar = ({ isAuthenticated, logout, chatState,username }) => {
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
                <Notification className="nav-link" />
                {/* <NavLink className="nav-link" exact to="/dashboard">Update Profile</NavLink> */}
                {/* NavLinks apply the active class when URL is same as their path */}
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" onClick={logout} href="#!">Logout</a>
                {/* NavLinks apply the active class when URL is same as their path 
            </li> */}
        </Fragment>
    );
    
    const onClickLogout = (e) => {
        e.preventDefault()
        console.log("Onclick wala : ",username)
        logout(username)

    }

    const chatLinks = (
        <Fragment >


            <ul className="nav nav-pills nav-fill float-end d-flex align-self-start">
                <li className="nav-item">
                    <NavLink className="nav-link " onClick={() => { console.log("Clicked") }} exact to="/friends">Friends</NavLink>
                    {/* NavLinks apply the active class when URL is same as their path */}
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link" onClick={chatState} exact to="/chats">Chats</NavLink>
                </li> */}
                <li className="nav-item btn-group btn-group-sm">
                   
                        <button type="button" class="btn btn-light">{username}</button>
                        <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-light" aria-labelledby="dropdownMenuReference">
                            <li>
                                
                                <NavLink className="dropdown-item" onClick={chatState} exact to="/chats">Profile</NavLink>
                                
                            </li>
                            <li>
                                
                                <NavLink className="dropdown-item" onClick={chatState} exact to="/dashboard">Update Profile</NavLink>    
                                
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={(e)=>{onClickLogout(e)}} href="#!">Logout</a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li></li>
                        </ul>
                    
                </li>

            </ul>

        </Fragment>
    );

    let togglerStyle = {
        marginLeft: '3px'
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light  bg-light">
            <div className="container-fluid w-25" style={togglerStyle}>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link className="navbar-brand" exact to="/">Chatter-Box</Link>
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
    isAuthenticated: state.auth.isAuthenticated,
    username: state.profile.username
});

export default connect(mapStateToProps, { logout })(navbar);
