import styled, { css } from 'styled-components'

const FlexStyleTypes = {
    navbar: css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        background-color: rgb(26, 224, 208);
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
        width: 600px;
        height: auto;
        & > form{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
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
        min-height: 200px;
        max-height: 150px;
        max-width: 100%;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 10px;
        width: 100%;
        padding: 10px;
        gap: 5px;
        & > :first-child {
            margin-top: auto !important;
        }
    `,
    message: css`
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    `,
}

const Flex = styled.div`
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

export default Flex
