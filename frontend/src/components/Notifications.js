import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Notification = () => {

    
 
    return (
        <Fragment className="nav-item">
            <Link className="nav-link " type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Notifications</Link>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Notifications</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">



                </div>
            </div>
                    

        </Fragment>
    );
}

const mapStateToProps = state => ({
    notifications:state.notification.notifylist,
    //these are the variables passed as props globally tomaintain state of application
})

export default connect(mapStateToProps,{})(Notification);