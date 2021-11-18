import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
/*Redux thunk allows us to disptach actions like GET,POST api requests asynchronously and resolve each promise that gets returned*/  
const initialState = {}

const middleWare = [thunk]

const store  = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
    );

export default store;    