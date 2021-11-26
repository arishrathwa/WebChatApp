import { GET_NOTIFICATIONS_FAIL,GET_NOTIFICATIONS_SUCCESS } from "../actions/types";

const initialState = {
    notify_list : []
}

export default function (state=initialState, action) {

    const { type,payload } = action;
    switch (type) {
        case GET_NOTIFICATIONS_SUCCESS:
            return{
                ...state,
                notify_list : payload.data
                
            }
                
                
       case GET_NOTIFICATIONS_FAIL:         
        default: return {...state}    

}

}