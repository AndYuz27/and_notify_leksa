import React from 'react'
import { useForm } from 'react-hook-form';
import { socket } from '../../service/socket'
import colors from '../../colors'
import Form from '../../ui/Form'
import {
    TextInputStyled,
    SubmitInputStyled,
} from '../../Ui'
import Text from '../../ui/Text'
import Flex from '../../ui/Flex'



function ChatForm({
    notifications, getHandler, sendHandler, fetchRemoveMessage, removeHandler,
}) {
    const messages = React.useRef(null)
    React.useEffect(() => {
        socket.on('remove', (id) => {
            removeHandler(id)
        })
        socket.on('message', (message) => {
            getHandler(message)
        })
        return () => {
            socket.off('message', console.log('off'));
        }
    }, [])
    React.useEffect(() => {
        messages.current.scrollTop = messages.current.scrollHeight - messages.current.clientHeight
    }, [notifications])
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });
    return (
        <div>
            <form
                onSubmit={handleSubmit((formData) => {
                    sendHandler(socket, formData)
                })}>
    <Form width={'100%'} margin='10px' height='100px' border={colors.main_border}>
            <div>
                <Flex width={'100%'}  type={'label'} >
                    <Text color={colors.main_text}>Имя</Text>
                    {errors.name && <Text color={colors.main_error_text}>{errors.name.message}</Text>}
                </Flex>
                <TextInputStyled
                    border={colors.main_border}
                    placeholder='Ваш никнейм/имя'
                    {...register(
                        'name',
                        {
                            required: 'ГДЕ ИМЯ!?',
    
                        },
                    )}
                    name="name"
                />
            </div>
            <div>
                <Flex type={'label'} >
                    <Text color={colors.main_text}>Сообщение</Text>
                    {errors.message && <Text color={colors.main_error_text}>{errors.message.message}</Text>}
                </Flex>
                <TextInputStyled 
                    border={colors.main_border}
                    
                    placeholder='Введите тут ваше сообщение'
                    {...register(
                        'message',
                        {
                            required: 'Пустота............',
    
                        },
                    )}
                    name="message"/>
            </div>
            <SubmitInputStyled border={colors.main_border} name="submit">выслать сообщение
            </SubmitInputStyled>
        </Form>
        </form>
        <form
            onSubmit={handleSubmit((formData) => {
                sendHandler(socket, formData)
            })}
        >

    <Text>чатэг</Text>
            <Flex width={'100%'} type={'messages'} background={colors.main_background} ref={messages}>
                {notifications.length > 0 && notifications.map((el, index) => {
                        if (el) {
                            return (
                                <Flex type="message" key={index}>
                                    <Text >{el.name} пишет: {el.message}</Text>
                                    <Flex gap="5px">
                                        <Text >Время {el.time}</Text>
                                        <Text type="del" onClick={() => fetchRemoveMessage(socket, el._id)}>🗑</Text>
                                    </Flex>
                                </Flex>

                            )
                        }
                        return null
                    })
                }
            </Flex>
            
            
        </form>

        </div>
    )
}

export default ChatForm
