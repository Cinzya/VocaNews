import { combineReducers } from 'redux';
import BlogsReducer from './BlogsReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    Blogs: BlogsReducer,
    User: UserReducer
})

export default rootReducer;