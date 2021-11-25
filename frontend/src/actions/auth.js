import axios from 'axios' //For making API requests and handle responses like fetch api
import { REGISTER_SUCCESS,REGISTER_FAIL,
            LOGIN_FAIL,LOGIN_SUCCESS,
            LOGOUT_FAIL,LOGOUT_SUCCESS,
            AUTHENTICATED_FAIL,AUTHENTICATED_SUCCESS,
            DELETE_USER_FAIL,DELETE_USER_SUCCESS,
            FEEDBACK_SEND_FAIL,FEEDBACK_SEND_SUCCESS,
            GET_SEARCHED_FRIENDS_FAIL,GET_SEARCHED_FRIENDS_SUCCESS,
        } from '../actions/types'

import Cookies from 'js-cookie'

import { load_user } from './profile'
//CHECK AUTHENTICATED OR NOT
export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
             'X-CSRFToken':`${Cookies.get('csrftoken')}`  //no need of for get request getting auth status
        }
    };
    
    const body = JSON.stringify({
        
    })

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/authenticated`,body,config)

       if(res.data.error || res.data.isAuthenticated === 'error') {
           dispatch({
               type:AUTHENTICATED_FAIL,
               payload:false
           })
       }
       else if(res.data.isAuthenticated === 'success'){
           dispatch({
               type:AUTHENTICATED_SUCCESS,
               payload:true
           })
       }
       else { // it will act when user accessing view without authentication cookies
        dispatch({
            type:AUTHENTICATED_FAIL,
            payload:false
        })
       }

    } catch (error) {
        dispatch({
            type:AUTHENTICATED_FAIL,
            payload:false
        })
    }

}

//LOGIN

export const login = (username,password) => async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken')
        }
    };
    
    const body = JSON.stringify({username,password})

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`,body,config)

        if(res.data.error) {
            dispatch({
                type:LOGIN_FAIL
            })
        }
        else {
            dispatch({
                type:LOGIN_SUCCESS,
                // payload:res.data.username as profile is getting fetched after this
            });
            
            //load the user action dispatch after this
            dispatch(load_user())
        }

    } catch (error) {
        dispatch({
            type:LOGIN_FAIL
        })
    }

}
//REGISTER
export const register = (username,password,re_password) => async dispatch => {
    console.log(Cookies.get('csrftoken'))
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':`${Cookies.get('csrftoken')}`
        }
    };
    const body = JSON.stringify({username,password,re_password})

    try {

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`,body,config);

        if(res.data.error) {
            dispatch({
                type:REGISTER_FAIL
            });
        }else {
            dispatch({
                type:REGISTER_SUCCESS
            });
        }

    }catch(err){
        dispatch({
            type:REGISTER_FAIL
        });
    }

} 

//LOGOUT
export const logout = (username) => async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':`${Cookies.get('csrftoken')}`
        }
    };
    console.log("logout wala : ",username)
    const body = JSON.stringify({
        'withCredentials':true,
        'username':username
    })

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/logout`,body,config)

        if(res.data.error) {
            dispatch({
                type:LOGOUT_FAIL
            })
        }
        else {
            dispatch({
                type:LOGOUT_SUCCESS,
            });
            
            //load the user action dispatch after this
        }

    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL
        })
    }

}

//DELETE USER
export const delete_account = () => async dispatch => {
    console.log("Arrived")
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':`${Cookies.get('csrftoken')}`
        }
    };
    console.log(Cookies.get('csrftoken'))
    const body = JSON.stringify({
        'withCredentials':true
    })
    
    try {

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/delete`,body,config)
        
        if( res.data.success ){
            dispatch({
                type:DELETE_USER_SUCCESS,
            })
        }
        else {
            dispatch({
                type:DELETE_USER_FAIL
            })
        }

    } catch (error) {
        dispatch({
            type:DELETE_USER_FAIL
        })
    }

}
//Feedback Sending
export const sendFeedback = (feedback,sender) => async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken')
        }
    };
    
    const body = JSON.stringify({'feedback':feedback
        ,'sender':sender})

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/feedback`,body,config)

        if(res.data.error) {
            dispatch({
                type:FEEDBACK_SEND_FAIL
            })
        }
        else {
            alert(res.data.success)
            dispatch({
                type:FEEDBACK_SEND_SUCCESS,
                
                // payload:res.data.username as profile is getting fetched after this
            });
            
            //load the user action dispatch after this
            dispatch(load_user())
        }

    } catch (error) {
        dispatch({
            type:LOGIN_FAIL
        })
    }

}

//GET SEARCHED USER LIST
//GET FRIEND LIST
export const get_searched_user_list = username =>async dispatch => {
    console.log("aa gaya",username)
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') 
        }
    };

    const body = JSON.stringify({
       'username' : username,
    })

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/get_searched_users`,body,config)

        if(res.data.error) {
            dispatch({
                type:GET_SEARCHED_FRIENDS_FAIL,
            })
        }
        else {console.log("Ori : ",res.data)
            dispatch({
                type:GET_SEARCHED_FRIENDS_SUCCESS,
                payload:res.data
            
            })
        }

    } catch (error) {
        dispatch({
            type:GET_SEARCHED_FRIENDS_FAIL
        })
    }
}

