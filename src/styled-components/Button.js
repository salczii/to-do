import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    color: pink;
    transition: .5s;
    ${props => props.login && css`
        border:2px solid white;
        color: white;
    `}
    ${props => props.task && css`
        border:2px solid white;
        background: white;
    `}
    &:hover {
            border: 2px solid #FA7870;
            outline: none;
        }
`

export default Button