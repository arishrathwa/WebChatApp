import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Layout from './higherOrderComponents/Layout'

import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import Chat from "./containers/Chat";
// import friends from './reducers/friends'
import Friends from './containers/Friends'
import PrivateRoute from './higherOrderComponents/PrivateRoute'

import { Provider } from 'react-redux';
import store from './store' 
import './styles/friends.css'
import './styles/general.css'
const App = () => (
    <Provider store={store}>
        <Router>
                <Layout>
                        <Route exact path='/' component={Home}/>
                        
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login' component={Login}/>
                        <PrivateRoute exact path='/friends' component={Friends}/>
                        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                        
                        <PrivateRoute exact path="/chats/:id"  component={Chat} />

                </Layout>
        </Router>    
    </Provider>

);

export default App;