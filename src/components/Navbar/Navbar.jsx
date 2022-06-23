import colors from '../../colors'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'
import NavLink from '../../ui/NavLink'

function Navbar() {
    return (
        <Flex
            type="navbar"
            padding='10px'
            width="100%"
            height="50px"
        >
            <Text type='navbar' color={colors.main_text}>Andy's Chat</Text>
            <NavLink
                type='navbar'
                to={'/'}
                color={colors.main_text}
            >
                    Chat
            </NavLink>
        </Flex>
    );
}

export default Navbar;
