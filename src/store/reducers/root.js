import { combineReducers } from 'redux';
export const NotifActionTypes = {
    ADD_NOTIF: 'ADD_NOTIF',
    ADD_NOTIF_ERROR: 'ADD_NOTIF_ERROR',
    FETCH_NOTIF: 'FETCH_NOTIF',
    FETCH_NOTIF_SUCCESS: 'FETCH_NOTIF_SUCCESS',
    FETCH_NOTIF_ERROR: 'FETCH_NOTIF_ERROR',
    FETCH_NOTIF_REMOVE_SUCCESS: 'FETCH_NOTIF_REMOVE_SUCCESS',
}

const initialState = {
    notifications: [
        {},
    ],
    loading: false,
    error: null,
}

 const NotifReducer = (state = initialState, action) => {
    switch (action.type) {
    case NotifActionTypes.ADD_NOTIF:
        return { ...state, notifications: [...state.notifications, action.payload] }
    case NotifActionTypes.ADD_NOTIF_ERROR:
        return { ...state, error: action.payload }
    case NotifActionTypes.FETCH_NOTIF:
        return { ...state, notifications: [], loading: true }
    case NotifActionTypes.FETCH_NOTIF_SUCCESS:
        return { ...state, notifications: action.payload, loading: false }
    case NotifActionTypes.FETCH_NOTIF_ERROR:
        return { ...state, error: action.payload, loading: false }
    case NotifActionTypes.FETCH_NOTIF_REMOVE_SUCCESS:
        return { ...state, notifications: state.notifications.filter((val) => val._id !== action.payload) }
    default:
        return state
    }
}
const rootReducer = combineReducers({
    notif: NotifReducer
})

export default rootReducer
