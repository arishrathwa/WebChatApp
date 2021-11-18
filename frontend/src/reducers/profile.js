import {
    LOAD_USER_PROFILE_FAIL,
    LOAD_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS
} from '../actions/types'

const initialState = {
    // isAuthenticated: null, as after authentication only it is being accessed, so no need here
    username: '',
    first_name: '',
    last_name: '',
    phone: '',
    city: '',
}


// eslint-disable-next-line import/no-anonymous-default-export
//thunk dispatch calls these states according to type
export default function (state = initialState, action) {

    const { type,payload } = action; 
    switch (type) {
        case UPDATE_USER_PROFILE_SUCCESS:
        case LOAD_USER_PROFILE_SUCCESS:
            return {
                ...state,
                username:payload.username,
                first_name:payload.profile.first_name,
                last_name:payload.profile.last_name,
                phone:payload.profile.phone,
                city:payload.profile.city
            }
        case LOAD_USER_PROFILE_FAIL:
            return {
                ...state,
                username:'',
                first_name:'',
                last_name:'',
                phone:'',
                city:'',
            }   
        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state
            }
           
        default: return state    

}

}