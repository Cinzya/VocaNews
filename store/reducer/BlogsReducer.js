import { FETCH_RSS_BEGIN, FETCH_RSS_SUCCESS, FETCH_RSS_FAILURE, CLEAR } from "../actions";

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

        default:
            return state
    }
}

export default BlogsReducer;
  



