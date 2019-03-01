import styled, { css } from 'styled-components';


const ModalComponent = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
position: absolute;
background-color: #fff;
padding:1rem 2rem;
top: 50%;
left: 50%;
z-index: -10;
transform: translateY(-50%) translateX(-50%) scale(0);
transition: .3s;
border-radius: 10px;
    ${props => props.show && css`
    z-index: 100;
    transform: translateY(-50%) translateX(-50%)  scale(1);
    `}
`

export default ModalComponent