import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
const TextStyleTypes = {
    h1: css`
        font-size: 20px;
    `,
    h2: css`
        font-size: 16px;
    `,
    p: css`
        font-size: 14px;
    `,
    del: css`
        font-size: 14px;
        &:hover{
            color: red;
            cursor: pointer;
        }
    `,
    navbar: css`
        font-size: 20px;
        padding: 20px;
    `,
}

export const TextStyled = styled.p`
    color: ${({ color }) => color};
    font-family: 'action_man';
    ${({ type = 'p' }) => TextStyleTypes[type]}
`





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

export const NavLinkStyled = styled(NavLink)`
    ${({ type = 'default' }) => NavLinkStyleTypes[type]}
    color: ${({ color }) => color || 'black'};
    background: ${({ background }) => background || 'inherit'};
    font-family: 'action_man';
    `

export const TextInputStyled = styled.input.attrs({ type: 'text' })`
    color: ${({ color }) => color || 'black'};
    background: ${({ background }) => background || 'white'};
    border: 1px solid ${({ border }) => border || 'black'};
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
    width: 460px;
    &, &::placeholder{
        font-family: 'action_man';
    }
`

export const SubmitInputStyled = styled.button.attrs({ type: 'submit' })`
    color: ${({ color }) => color || 'black'};
    background: ${({ background }) => background || 'white'};
    border: 1px solid black};
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
    width: 460px;
`
const FlexStyleTypes = {
    navbar: css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0
    `,
    label: css`
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 5px;
        width: 100%;
    `,
    chat: css`
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 800px;
        & > form{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            & > div{
                width: 100%;
            }
        }
    `,
    centered: css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    default: css`
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;
    `,
    messages: css`
        min-height: 100px;
        max-height: 100px;
        max-width: 260px;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 10px;
        width: 100%;
        padding: 10px;
        gap: 5px;

    `,
    message: css`
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    `,
}

export const Flex = styled.div`
    display: flex;
    background: ${({ background }) => background || 'inherit'};
    margin:  ${({ margin }) => margin || '0'}; // Ед. измерения указывается в пропсах
    padding:  ${({ padding }) => padding || '0'};
    height:  ${({ height }) => height || 'auto'};
    width:  ${({ width }) => width || 'auto'};
    border-radius:  ${({ radius }) => radius || '0'};
    gap:  ${({ gap }) => gap || '0'};
    ${({ type = 'default' }) => FlexStyleTypes[type]}
`;
