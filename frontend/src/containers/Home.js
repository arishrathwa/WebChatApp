import React from "react";
import { Link } from "react-router-dom";

const home = ()=> (
    <div className="container">
        <div className="mt-5 p-5 bg-light">
            <h1 className="display-4">Welcome to the ChatApp</h1>
            <p className="lead">
                This is wonderful application to Chat..
            </p>
            <hr className="my-4"/>
            <p>Click the button below to Login</p>
            <Link className="btn btn-primary btn-lg" exact to="/login">Login</Link>
        </div>
        
    </div>
);

export default home;
