import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import useActions from '../../hooks/useActions';

function ChatFormContainer() {
    const { notifications } = useSelector((state) => state.notif)
    const {
        sendHandler, getHandler, fetchRemoveMessage, removeHandler,
    } = useActions()
    return (
        <Form
            notifications={notifications}
            sendHandler={sendHandler}
            getHandler={getHandler}
            fetchRemoveMessage={fetchRemoveMessage}
            removeHandler={removeHandler}
        />
    )
}

export default ChatFormContainer
