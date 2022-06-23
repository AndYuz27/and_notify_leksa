import { NotifActionTypes } from '../reducers/root'

export const SERVER_URL = 'https://puzzlingdizzycleantech.andrieiiuzlov.repl.co/api/v1'
export const sendHandler = (socket, message) => async (dispatch) => {
    try {
        socket.emit('message', message);
    } catch (e) {
        console.log('Error', e)
        dispatch({
            type: NotifActionTypes.ADD_NOTIF_ERROR,
            payload: `Произошла ошибка при отправке сообщения: ${e}`,
        })
    }
}

export const getHandler = (message) => async (dispatch) => {
    try {
        dispatch({ type: NotifActionTypes.ADD_NOTIF, payload: message })
    } catch (e) {
        dispatch({
            type: NotifActionTypes.ADD_NOTIF_ERROR,
            payload: 'Произошла ошибка при получении сообщения',
        })
    }
}

export const removeHandler = (id) => async (dispatch) => {
    try {
        dispatch({ type: NotifActionTypes.FETCH_NOTIF_REMOVE_SUCCESS, payload: id })
    } catch (e) {
        console.log(`${e}`)
    }
}

export const fetchAllMessages = () => async (dispatch) => {
    try {
        dispatch({ type: NotifActionTypes.FETCH_NOTIF })
        fetch(`${SERVER_URL}/notifications/get`)
            .then((res) => res.json())
            .then((msgs) => {
                console.log(msgs)
                dispatch({ type: NotifActionTypes.FETCH_NOTIF_SUCCESS, payload: msgs })
            })
    } catch (e) {
        dispatch({
            type: NotifActionTypes.FETCH_NOTIF_ERROR,
            payload: 'Произошла ошибка при получении сообщений',
        })
    }
}

export const fetchRemoveMessage = (socket, id) => async (dispatch) => {
    try {
        fetch(`${SERVER_URL}/notifications/remove?id=${id}`)
            .then(() => {
                socket.emit('remove', id);
            })
    } catch (e) {
        dispatch({ type: NotifActionTypes.FETCH_NOTIF_ERROR, payload: e })
    }
}
