import { DELETE_EVENT } from './index';

export function deleteItems(blog, item) {
    return {
        type: DELETE_EVENT,
        item:  item,
        blog: blog
        
    }
}