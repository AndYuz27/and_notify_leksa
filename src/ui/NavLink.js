import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavLinkStyleTypes = {
    navbar: css`
        font-size: 20px;
        font-size: 16px;
        &:hover{
            background: ${({ hover }) => hover}
        }
        height: 50px;
        padding: 16px;
    `,
    default: css`
        font-size: 12px;
    `,
}

const NavLinkStyled = styled(NavLink)`
    ${({ type = 'default' }) => NavLinkStyleTypes[type]}
    color: ${({ color }) => color || 'black'};
    background: ${({ background }) => background || 'inherit'};
    font-family: 'action_man';
`

export default NavLinkStyled;
