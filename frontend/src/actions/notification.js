import {GET_NOTIFICATIONS_FAIL,GET_NOTIFICATIONS_SUCCESS,
        STORE_NOTIFICATIONS_FAIL,STORE_NOTIFICATIONS_SUCCESS} from './types'
import axios from 'axios'

import Cookies from 'js-cookie';


//GET FRIEND LIST
export const get_notification_list = (username) =>async dispatch => {
const config = {
    headers : {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'X-CSRFToken':Cookies.get('csrftoken') 
    }
};

const body = JSON.stringify({
   'username':username,
})

try {
        
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/notification/getnotified`,body,config)
    console.log("Nsot : ",res.data)
    if(res.data.error) {
        dispatch({
            type:GET_NOTIFICATIONS_FAIL,
        })
    }
    else {
        dispatch({
            type:GET_NOTIFICATIONS_SUCCESS,
            payload:res.data
        
        })
    }

} catch (error) {
    dispatch({
        type:GET_NOTIFICATIONS_FAIL
    })
}
}

//STORE FRIEND REQUEST
export const send_notification = ( username,receiver,status,info )=>async dispatch => {
const config = {
    headers : {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'X-CSRFToken':Cookies.get('csrftoken') 
    }
};

const body = JSON.stringify({
   'sender':username,
   'receiver':receiver,
    'status':status, // sent ,accept and deny values
    'info':info,
    "sender":username

})
console.log("SENDER : ",body.sender)
try {
    
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/notification/notify`,body,config)

    if(res.data.error) {
        dispatch({
            type:STORE_NOTIFICATIONS_FAIL,
        })
    }
    else {
        dispatch({
            type:STORE_NOTIFICATIONS_SUCCESS,
            payload:res.data
        })
    }

} catch (error) {
    dispatch({
        type:GET_NOTIFICATIONS_FAIL
    })
}
}
