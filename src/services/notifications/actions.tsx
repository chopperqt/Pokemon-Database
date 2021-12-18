import { store } from '../../index'

export const actions = {
    LOADING_REQUEST: 'LOADING_REQUEST',
    DELETE_TIME: 3000,
}

export const methods = {
    loadingRequest(key: string, value: boolean) {
        return {type: actions.LOADING_REQUEST, payload: {
            key,
            value,
        }}
    }
}