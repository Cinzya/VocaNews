import { FETCH_RSS_BEGIN, FETCH_RSS_SUCCESS, FETCH_RSS_FAILURE, CLEAR } from "../actions";

const initialState = {
    UrlList: [
        'https://www.vocaloidnews.net/feed/',
        'http://www.mikumiku2ch.jp/index.rdf',
        'https://paraisovocaloid.wordpress.com/feed/',
    ],
    RSSItems: [],
    loading: false,
    error: null,
    test: 'test'
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

        case CLEAR:
            return {
                ...state,
                test: action.payload
            }

        default:
            return state
    }
}

export default BlogsReducer;
  



