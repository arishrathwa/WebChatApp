import Cookies from 'js-cookie'
import axios from 'axios'

import { LOAD_USER_PROFILE_FAIL, LOAD_USER_PROFILE_SUCCESS ,
        UPDATE_USER_PROFILE_FAIL,UPDATE_USER_PROFILE_SUCCESS,
        GET_SEARCHED_FRIENDS_FAIL,GET_SEARCHED_FRIENDS_SUCCESS,
        } from './types'
//To get user data
//  const dispatch = useDispatch(function)
 export const update_user_profile = ( first_name, last_name, phone, city)=>async dispatch => {
     console.log("yaha aya tha..")
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') 
        }
    };

    const body = JSON.stringify({
        'withCredentials':true,
        first_name:first_name,
        last_name:last_name, 
        phone:phone, 
        city:city
    })

    try {
        
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/profile/update`,body,config)
        
        if(res.data.profile && res.data.username) {
            dispatch({
                type:UPDATE_USER_PROFILE_SUCCESS,
                payload:res.data
            })
        }
        else {
            dispatch({
                type:UPDATE_USER_PROFILE_FAIL,
            
            })
        }

    } catch (error) {
        dispatch({
            type:UPDATE_USER_PROFILE_FAIL
        })
    }
}
//To UPDATE USER_PROFILE DATA
export const load_user = ()=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            // 'X-CSRFToken':Cookies.get('csrftoken') no need when get request is made
        }
    };

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/profile/user`,config)

        if(res.data.error) {
            dispatch({
                type:LOAD_USER_PROFILE_FAIL
            })
        }
        else {
            dispatch({
                type:LOAD_USER_PROFILE_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {
        dispatch({
            type:LOAD_USER_PROFILE_FAIL
        })
    }
}

