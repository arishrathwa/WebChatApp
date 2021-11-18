import React, { Fragment,useEffect } from "react";
import Navbar from '../components/Navbar'
import { connect } from "react-redux";
import { checkAuthenticated } from "../actions/auth";
import { load_user } from "../actions/profile";

const Layout = ({ children, checkAuthenticated, load_user })=> {
    // console.log("Children => ",children)

    useEffect(() => {
        checkAuthenticated(); //checks authenticated or not upon every render once
        load_user(); //after authenticationChaeck status user will be loaded
    }, [])

    return(
    <Fragment>
        <Navbar/>
        {children}
    </Fragment>
    );
};

export default connect(null,{checkAuthenticated,load_user})(Layout);
