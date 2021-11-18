import React, { Fragment } from 'react'

export default function ChatUI({ title, onDelete }) {

    return (
        <Fragment>
            <nav class="navbar fixed-bottom navbar-light bg-light">
                <div class="container-fluid">
                <input type="text" className='form-control w-50 mx-auto' />
                <a class="btn btn-success mx-auto" href="#">Send</a>
                </div>
            </nav>
            
        </Fragment>
    )
}
