export const combineBlogs = {
    HMBlog: HMBlogReducer,
    VNN: VNNReducer,
    MRDairy: MRDairyReducer,
    HMChannel: HMChannelReducer,
    Paraisovocaloid: ParaisovocaloidReducer
}

const HMBlogReducer =
(state = {
    link: 'http://hatsunemiku.blog107.fc2.com/?xml',
    language: 'jp',
    feed: []
}, action) => {
    switch (action.type) {
    default:
        return state
    }
};

const VNNReducer =
(state = {
    link: 'https://www.vocaloidnews.net/feed/',
    language: 'en',
    feed: []
    }, action) => {
    switch (action.type) {
    default:
        return state
    }
};
    
const MRDairyReducer =
(state = {
    link: 'https://hatsunemiku1006.blog.fc2.com/?xml',
    language: 'jpn',
    feed: []
    }, action) => {
    switch (action.type) {
    default:
        return state
    }
};
  
const HMChannelReducer =
(state = {
    link: 'http://www.mikumiku2ch.jp/index.rdf',
    language: 'jp',
    feed: []
  }, action) => {
    switch (action.type) {
    default:
        return state
    }
};

  
const ParaisovocaloidReducer =
(state = {
    link: 'https://paraisovocaloid.wordpress.com/feed/',
    language: 'es',
    feed: []
  }, action) => {
      switch (action.type) {
        default:
          return state
      }
    };


