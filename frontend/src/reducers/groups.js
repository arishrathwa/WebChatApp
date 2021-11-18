import {
    GET_GROUPS_FAIL,GET_GROUPS_SUCCESS,
} from '../actions/types'

const initialState = {
    // isAuthenticated: null, as after authentication only it is being accessed, so no need here
    grouplist:[]
}


// eslint-disable-next-line import/no-anonymous-default-export
//thunk dispatch calls these states according to type
export default function (state = initialState.grouplist, action) {

    const { type,payload } = action; 
    switch (type) {
        case GET_GROUPS_SUCCESS:
            return [
                ...state,
                {grouplist:
                    payload.data
                }
            ]
        
        case GET_GROUPS_FAIL:
            return {
                ...state
            }
           
        default: return state    

}

}