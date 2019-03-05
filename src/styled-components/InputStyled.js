import styled from 'styled-components';

const InputStyled = styled.input`
outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    :focus {
     outline: none;
     background-color: #ccc;
    }
`

export default InputStyled

// .Invalid {
//     border: 1px solid red;
//     background-color: #FDA49A;
// }