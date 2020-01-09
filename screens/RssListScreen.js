import React, { Components } from 'react';

class RssListScreen extends React {
    constructor() {
        super();
        state = {
            rssURLs: [
                {
                    PiaproBlog: 'blog.piapro.net/feed'
                },
                {
                    VNN: 'https://www.vocaloidnews.net/feed/'
                },
                {
                    paraisovocaloid: 'https://paraisovocaloid.wordpress.com/feed/'
                }
            ]
            rssList: []
        }
    }

    componentDidMount(url) {
        RSScall.map(
            fetch("https://api.rss2json.com/v1/api.json?rss_url=" + url {
                method: 'GET'
            })
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                this.setState(state => {
                    return {rssList: state.rssList.concat(responseData)}
                })
            })
            
        )
    }

}

export default RssListScreen;