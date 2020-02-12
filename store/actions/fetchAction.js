import { FETCH_RSS_BEGIN, FETCH_RSS_SUCCESS, FETCH_RSS_FAILURE } from "./index";

export const fetchRSSBegin = () => ({
    type: FETCH_RSS_BEGIN
})

export const fetchRSSSuccess = data => ({
    type: FETCH_RSS_SUCCESS,
    payload: { data }
})

export const fetchRSSFailure = error => ({
    type: FETCH_RSS_FAILURE,
    payload: { error }
})

export function RSSfetch(url) {
    return dispatch => {
        dispatch(fetchRSSBegin());
        return fetch('https://api.rss2json.com/v1/api.json?rss_url=' + url, {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            dispatch(fetchRSSSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchRSSFailure(error)));
    }
}