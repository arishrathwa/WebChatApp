import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
export default function ChatUI({ title, onDelete }) {

    return (
        <Fragment>
            <div className='container-fluid p-2'>
                <nav class="navbar navbar-dark bg-primary">
                    <div class="container-fluid">
                        <NavLink className="btn btn-light" exact to="/friends">Back</NavLink>
                        <h3>Friend/GroupName Dynamic</h3>
                    </div>
                </nav>    
                <div className='overflow-auto'>
                    {/* CHAT COMPONENT */}
                </div>
                <nav class="navbar fixed-bottom navbar-light bg-light">
                    <div class="container-fluid">
                    <input type="text" className='form-control w-50 mx-auto' />
                    <a class="btn btn-success mx-auto" href="#">Send</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
