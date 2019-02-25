import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border:2px solid red;
    border-radius: 3px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    transition: .5s;
    &:hover {
            border: 2px solid #FA7870;
            outline: none;
        }
`

export default Button