import {
    ADD_FRIEND_FAIL,ADD_FRIEND_SUCCESS,
    GET_FRIENDS_FAIL,GET_FRIENDS_SUCCESS,
    GET_SEARCHED_FRIENDS_FAIL,GET_SEARCHED_FRIENDS_SUCCESS,
} from '../actions/types'

const initialState = {
    // isAuthenticated: null, as after authentication only it is being accessed, so no need here
    friendlist:[],
    searchedUser:[],
}


// eslint-disable-next-line import/no-anonymous-default-export
//thunk dispatch calls these states according to type
export default function (state = initialState, action) {

    const { type,payload } = action; 
    switch (type) {
        case GET_FRIENDS_SUCCESS:    
            return {
                ...state,
                friendlist:
                    payload.data
                
            }
        case GET_SEARCHED_FRIENDS_SUCCESS:    
             console.log("Payload",payload.data)   
             return {
                 ...state,
                 searchedUser:payload.data
    } 
        case ADD_FRIEND_SUCCESS:
        case GET_FRIENDS_FAIL:        
        case GET_SEARCHED_FRIENDS_FAIL:        
        case ADD_FRIEND_FAIL:
            return {
                ...state
    }
           
        default: return {...state}    

}

}