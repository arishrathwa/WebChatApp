import {
    ADD_FRIEND_FAIL,ADD_FRIEND_SUCCESS,
    GET_FRIENDS_FAIL,GET_FRIENDS_SUCCESS
} from '../actions/types'

const initialState = {
    // isAuthenticated: null, as after authentication only it is being accessed, so no need here
    friendlist:[]
}


// eslint-disable-next-line import/no-anonymous-default-export
//thunk dispatch calls these states according to type
export default function (state = initialState.friendlist, action) {

    const { type,payload } = action; 
    switch (type) {
        case GET_FRIENDS_SUCCESS:
            return [
                ...state,
                {friendlist:
                    payload.data.friends
                }
            ]
        case ADD_FRIEND_SUCCESS:
        case GET_FRIENDS_FAIL:
        case ADD_FRIEND_FAIL:
            return [
                ...state
            ]
           
        default: return [...state]    

}

}