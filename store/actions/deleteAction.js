import { DELETE_EVENT } from './index';

export function deleteItems(item) {
    return {
        type: DELETE_EVENT,
        payload: item
    }
}