import React,{useState,useEffect} from "react";
import {connect} from 'react-redux'
import { update_user_profile } from "../actions/profile";
import { delete_account } from "../actions/auth";

const Dashboard = ({
    delete_account,
    update_user_profile,
    first_name_global,
    last_name_global,
    phone_global,
    city_global,

})=> {

    

    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        phone:'',
        city:'',
    })

    

    const { first_name, last_name, phone, city} = formData
    
    //For initial global values
    useEffect(() => {
       setFormData({
        first_name:first_name_global,
        last_name:last_name_global,
        phone:phone_global,
        city:city_global,
       });
    }, [first_name_global,last_name_global,phone_global,city_global])

    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value}) 

    const onSubmit = e => {
        e.preventDefault();
        update_user_profile( first_name, last_name, phone, city);//it async function
    }   

    return(
        <div className="container">
            <h1 className="mt-3">Welcome to User Dashboard</h1>
            <p className="mt-3 mb-3">Update User Profiel Below..</p>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group mt-3">
                        <label htmlFor="first_name">First Name:</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="first_name"
                            placeholder={first_name_global}
                            onChange={e=>onChange(e)}
                            value={first_name}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="last_name">Last Name:</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="last_name"
                            placeholder={last_name_global}
                            onChange={e=>onChange(e)}
                            value={last_name}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="phone">Phone:</label>
                        <input 
                            className="form-control"
                            type="number"                            
                            name="phone"
                            placeholder={phone_global}
                            onChange={e=>onChange(e)}
                            value={phone}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="city">City:</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="city"
                            placeholder={city_global}
                            onChange={e=>onChange(e)}
                            value={city}
                        />
                    </div>
                    <button className="btn btn-primary mt-3" type="submit">
                        Update
                    </button>
                </form>
                <p className="mt-5">Click the button below to delete your User Account : </p>
                <a className="btn btn-danger" href="#!" onClick={delete_account}>
                    Delete Account
                </a>
        </div>
    );
    
};

const mapStateToProps = state => ({
    username : state.profile.username,
    first_name_global:state.profile.first_name,
    last_name_global:state.profile.last_name,
    phone_global:state.profile.phone,
    city_global:state.profile.city,
    //these are the variables passed as props globally tomaintain state of application
})

export default connect(mapStateToProps,{delete_account ,update_user_profile})(Dashboard);
