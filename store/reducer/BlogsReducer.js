const INITIAL_STATE = {
    UrlList: [
        'https://www.vocaloidnews.net/feed/',
        'http://www.mikumiku2ch.jp/index.rdf',
        'https://paraisovocaloid.wordpress.com/feed/',
    ],
    entries: []
}
    
function BlogsReducer(state = INITIAL_STATE, actions) {
    switch (action.type) {
        default:
            return state
    }
}

export default BlogsReducer;
  



