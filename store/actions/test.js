import {CLEAR} from './index';

export function clearState() {
    return {
        type: CLEAR,
        payload: ''
    }
}