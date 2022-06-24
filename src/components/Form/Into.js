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


function Into({
    notifications, getHandler, sendHandler, fetchRemoveMessage, removeHandler,
}) {
    const messages = React.useRef(null)
    React.useEffect(() => {
        socket.on('message', (message) => {
            getHandler(message)
        })
        socket.on('remove', (id) => {
            removeHandler(id)
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
        )
    }
    
    export default Into