import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    FEEDBACK_SEND_FAIL,
    FEEDBACK_SEND_SUCCESS
} from '../actions/types'

const initialState = {
    isAuthenticated: null,
    // username: '', no need as after login profile is being fetched
    
}

// eslint-disable-next-line import/no-anonymous-default-export
//thunk dispatch calls these states according to type
export default function (state=initialState, action) {

    const { type,payload } = action;
    switch (type) {
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return {
                 ...state,
                 isAuthenticated:payload
             }
             
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
    
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated:true,
                username: payload
            }    
        
        case LOGOUT_SUCCESS:
        case DELETE_USER_SUCCESS:    
            return {
                ...state,
                isAuthenticated:false,
                username:''
            }     
        
        case REGISTER_FAIL:
        case LOGIN_FAIL:  
        case LOGOUT_FAIL:  
        case DELETE_USER_FAIL:
        case FEEDBACK_SEND_FAIL:
        case FEEDBACK_SEND_SUCCESS:    
                return state; 
         
                
                
                
                
        default: return state    

}

}