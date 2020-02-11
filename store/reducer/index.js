import { combineReducers } from 'redux';
import { combineBlogs } from './BlogsReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    Blogs: combineBlogs,
    User: UserReducer
})

export default rootReducer;