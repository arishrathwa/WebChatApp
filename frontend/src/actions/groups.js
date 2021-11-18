
import {GET_GROUPS_FAIL,GET_GROUPS_SUCCESS,
        ADD_GROUP_FAIL,ADD_GROUP_SUCCESS, GET_GROUP_MEMBERS_FAIL, GET_GROUP_MEMBERS_SUCCESS} from './types'
import axios from 'axios'

import Cookies from 'js-cookie';


//GET FRIEND LIST
export const get_group_list = ( username )=>async dispatch => {
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
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/groups/getgroups`,body,config)

        if(res.data.success) {
            dispatch({
                type:GET_GROUPS_SUCCESS,
                payload:res.data
            })
        }
        else {
            dispatch({
                type:GET_GROUPS_FAIL,
                
            
            })
        }

    } catch (error) {
        dispatch({
            type:GET_GROUPS_FAIL
        })
    }
}

//STORE GROUP


export const store_group = (username,groupname)=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') //no need when get request is made
        }
    };

    const body = JSON.stringify({
        'username':username,
        'connectionid':groupname
    })

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/groups/storegroups`,config)

        if(res.data.error) {
            dispatch({
                type:ADD_GROUP_FAIL
            })
        }
        else {
            dispatch({
                type:ADD_GROUP_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {
        dispatch({
            type:ADD_GROUP_FAIL
        })
    }
}

//GET GROUP MEMBERS

export const get_group_members = (username,groupname)=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') //no need when get request is made
        }
    };

    const body = JSON.stringify({
        'username':username,
        'connectionid':groupname
    })

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/groupmembers/getgroupmembers`,body,config)

        if(res.data.error) {
            dispatch({
                type:GET_GROUP_MEMBERS_FAIL
            })
        }
        else {
            dispatch({
                type:GET_GROUP_MEMBERS_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {
        dispatch({
            type:GET_GROUP_MEMBERS_FAIL
        })
    }
}
//STORE GROUP MEMBERS
export const store_group_members = (username,groupname)=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken') //no need when get request is made
        }
    };

    const body = JSON.stringify({
        'username':username,
        'connectionid':groupname
    })

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/groupmembers/addgroupmember`,body,config)

        if(res.data.error) {
            dispatch({
                type:GET_GROUP_MEMBERS_FAIL
            })
        }
        else {
            dispatch({
                type:GET_GROUP_MEMBERS_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {
        dispatch({
            type:GET_GROUP_MEMBERS_FAIL
        })
    }
}

