import styled, { css } from 'styled-components';

const ModalComponent = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
position: fixed;
top:50%;
left:50%;
transform: translateY(-100vh);
transition: 1s;
    ${props => props.show && css`
    z-index: 1000;
    position: fixed;
    background-color: #fff;
    width: 80vw;
    height: 80vh;
    transform: translateY(-50%) translateX(-50%);
    `}
`

export default ModalComponent