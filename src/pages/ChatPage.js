import Form from '../components/Form/FormContainer'
import colors from '../colors'
import Flex from '../ui/Flex'
import Text from '../ui/Text'

function Chat() {
    return (
        <Flex
            type='chat'
            radius='5px'
            padding='10px'
            background={colors.secondary_background}
            
        >
            <Text
                type="h1"
                color={colors.main_text}
            >
                    Наш чатэг
            </Text>
            <Form />
        </Flex>
    );
}

export default Chat;
