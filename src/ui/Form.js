import styled from 'styled-components'

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin:  ${({ margin }) => margin || '0'};
    padding:  ${({ padding }) => padding || '0'};
    width: 100%;
`;

export default Form
