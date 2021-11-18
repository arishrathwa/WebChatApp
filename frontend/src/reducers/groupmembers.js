import {
    
    GET_GROUP_MEMBERS_FAIL,GET_GROUP_MEMBERS_SUCCESS,
    STORE_GROUP_MEMBERS_FAIL,STORE_GROUP_MEMBERS_SUCCESS
} from '../actions/types'

const initialState = {
    // isAuthenticated: null, as after authentication only it is being accessed, so no need here
    groupmembers:[]
}


// eslint-disable-next-line import/no-anonymous-default-export
//thunk dispatch calls these states according to type
export default function (state = initialState, action) {

    const { type,payload } = action; 
    switch (type) {
        case GET_GROUP_MEMBERS_SUCCESS:
            return [
                ...state,
                {groupmembers:
                    payload.data.group
                }
            ]
        case STORE_GROUP_MEMBERS_SUCCESS:
        case STORE_GROUP_MEMBERS_FAIL:
        case GET_GROUP_MEMBERS_FAIL:
            return {
                ...state
            }
           
        default: return state    

}

}