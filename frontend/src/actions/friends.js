
import {ADD_FRIEND_FAIL, ADD_FRIEND_SUCCESS, GET_FRIENDS_FAIL,GET_FRIENDS_SUCCESS,
        GET_SEARCHED_FRIENDS_FAIL,GET_SEARCHED_FRIENDS_SUCCESS} from './types'
import axios from 'axios'

import Cookies from 'js-cookie';


//GET FRIEND LIST
export const get_friend_list = ()=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') 
        }
    };
    console.log("in get friend")
    const body = JSON.stringify({
       
    })

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/friends/getfriends`,body,config)

        if(res.data.error) {
            dispatch({
                type:GET_FRIENDS_FAIL,
            })
        }
        else {
            console.log(res)
            dispatch({
                type:GET_FRIENDS_SUCCESS,
                payload:res.data,
            
            })
        }

    } catch (error) {
        dispatch({
            type:GET_FRIENDS_FAIL
        })
    }
}

//GET FRIEND LIST
// export const get_searched_user_list = ( username )=>async dispatch => {
//     console.log("aa gaya")
//     const config = {
//         headers : {
//             'Accept':'application/json',
//             'Content-Type':'application/json',
//             'X-CSRFToken':Cookies.get('csrftoken') 
//         }
//     };

//     const body = JSON.stringify({
//        'username' : username,
//     })

//     try {
        
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/get_searched_users`,body,config)

//         if(res.data.error) {
//             dispatch({
//                 type:GET_SEARCHED_FRIENDS_FAIL,
//             })
//         }
//         else {
//             dispatch({
//                 type:GET_SEARCHED_FRIENDS_SUCCESS,
//                 payload:res.data
            
//             })
//         }

//     } catch (error) {
//         dispatch({
//             type:GET_SEARCHED_FRIENDS_FAIL
//         })
//     }
// }


//STORE FRIEND

export const store_friend_connection = (username,friend,connectionid="")=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') //no need when get request is made
        }
    };

    const body = JSON.stringify({
        'user':username,
        'friend_username':friend,
        'connectionid':connectionid,
    })
    console.log("info : inreq : ",connectionid)
    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/friends/addfriend`,body,config)

        if(res.data.error) {
            dispatch({
                type:ADD_FRIEND_FAIL
            })
        }
        else {
            dispatch({
                type:ADD_FRIEND_SUCCESS,
            })
        }

    } catch (error) {
        dispatch({
            type:ADD_FRIEND_FAIL
        })
    }
}
//Delete Friend
export const del_friend = ( username )=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            //'X-CSRFToken':Cookies.get('csrftoken') 
        }
    };

    const body = JSON.stringify({
       
    })

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/friends/delfriend`,body,config)

        if(res.data.error) {
            dispatch({
                type:GET_FRIENDS_FAIL,
            })
        }
        else {
            dispatch({
                type:GET_FRIENDS_SUCCESS,
                payload:res.data
            
            })
        }

    } catch (error) {
        dispatch({
            type:GET_FRIENDS_FAIL
        })
    }
}