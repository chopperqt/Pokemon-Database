import axios, { AxiosResponse } from 'axios'

import { store } from '../index'
import { methods } from '../services/rootStore'

const {
    notificationsMethods
} = methods
const {
    loadingRequest
} = notificationsMethods

export async function getRequest<T>(url: string, loading: string, data?: T) {
    store.dispatch(loadingRequest(loading, false))

    return axios.get(url)
    .then((response) => {
        store.dispatch(loadingRequest(loading, true))

        return response
    })
    .catch((error) => {
        store.dispatch(loadingRequest(loading, true))

        return error
    })
}

export function checkRequest(data: any) {
    if (data.status >= 200 && data.status <= 300) {
        return true
    }
    
    return false
}