import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import phones from './phones'
import phonesPage from './phonePage'

export default combineReducers({
    routing: routerReducer,
    phones,
    phonesPage
})