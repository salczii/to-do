import styled, { css } from 'styled-components';

const TaskElement = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    background: #ddd;
    ${props => props.important && css`
    color: red;
    background: ${props => props.color && props.color};
    `}
`

export default TaskElement