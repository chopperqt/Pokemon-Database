import { actions } from './actions'

const {
    LOADING_REQUEST
} =  actions

const initialState = {
    loading: {}
}

export const notificationsStore = (
    state = initialState,
    {
        type,
        payload
    }: {
        type: string,
        payload: any
    }
) => {
    switch (type) {
        case LOADING_REQUEST:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [payload.key]: payload.value,
                }
            }
        default:
            return {
                ...state,
            }
    }
}
