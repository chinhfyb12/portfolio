import { combineReducers, createStore } from 'redux'
import statusCursor from '../reducers/statusCursor'
import statusMenu from '../reducers/statusMenu'
import statusLoading from '../reducers/statusLoading'

const rootReducer = combineReducers({
    statusCursor,
    statusMenu,
    statusLoading
})

const store = createStore(rootReducer)

export default store;