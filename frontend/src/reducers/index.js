import {combineReducers} from 'redux';
import auth from './auth'
import profile from './profile'
import friends from './friends'
export default combineReducers({
    auth,
    profile,
    friends,
})