import colors from '../../colors'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'

function Navbar() {
    return (
        <Flex type="navbar" padding='10px' width="100%" height="50px">
            <Text type='navbar' color={colors.main_text}>Andy's Chat</Text>
        </Flex>
    );
}

export default Navbar;
