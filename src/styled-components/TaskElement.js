import styled, { css } from 'styled-components';

const TaskElement = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    border-radius: 20px;
    width: 80%;
    margin: 2rem 0;
    background: #ddd;
    ${props => props.important && css`
    color: white;
    background: ${props => props.color && 'pink'};
    border: 1px solid red;
    `}
`

export default TaskElement