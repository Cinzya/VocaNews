import { combineReducers } from 'redux';
import { RssListReducer } from './RssListReducer'

export default combineReducers({
    RssList: RssListReducer
})