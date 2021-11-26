import {combineReducers} from 'redux';
import auth from './auth'
import profile from './profile'
import friends from './friends'
import notifications from './notifications';
export default combineReducers({
    auth,
    profile,
    friends,
    notifications,
})