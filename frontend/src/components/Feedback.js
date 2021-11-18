import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


const Feedback = ({ sendFeedback }) => {

    const [formData, setFormData] = useState({
        sender: '',
        feedback: ''
    })

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const { sender, feedback } = formData
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            sendFeedback(feedback, sender)
        }
        catch (err) {

        }
    }
 
    return (
        <Fragment className="nav-item">
            <Link className="nav-link " type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Feedback</Link>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Feedback</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <form onSubmit={e=>{onSubmit(e)}}>
                    <label htmlFor="sender">Name : </label>
                    <input type="text" className="form-control mt-3" onChange={e => { onChange(e) }} name="sender" />
                    <label htmlFor="feedback">Message : </label>
                    
                    <textarea className="form-control mt-3" onChange={e => { onChange(e) }} name="feedback" cols="30" rows="10"></textarea>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </form>
                </div>
            </div>


        </Fragment>
    );
}

export default Feedback;