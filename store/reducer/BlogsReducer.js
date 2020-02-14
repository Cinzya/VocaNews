import { FETCH_RSS_BEGIN, FETCH_RSS_SUCCESS, FETCH_RSS_FAILURE, DELETE_EVENT } from "../actions";
import { onFrameDidUpdate } from "expo/build/AR";

const initialState = {
    UrlList: [
        'https://www.vocaloidnews.net/feed/',
        'https://paraisovocaloid.wordpress.com/feed/',
        'https://blog.piapro.net/feed',
    ],
    RSSItems: [],
    loading: false,
    error: null
}
    
function BlogsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RSS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_RSS_SUCCESS:
            return {
                ...state,
                loading: false,
                RSSItems: [...state.RSSItems, action.payload]
            };
        
        case FETCH_RSS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                RSSItems: []
            };

        case DELETE_EVENT:
            return {
                ...state,
                RSSItems: [state.RSSItems.items.filter(item => state.RSSItems.items.indexOf(item) !== state.RSSItems.items.indexOf(action.payload))]
            }

        default:
            return state
    }
}

export default BlogsReducer;
  



