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
width:28%;
height:62%;
z-index: -10;
transform: translateY(-50%) translateX(-50%) scale(0);
transition: .3s;
border-radius: 10px;
    ${props => (props.withError || props.show) && css`
    z-index: 100;
    transform: translateY(-50%) translateX(-50%)  scale(1);
    `}
    ${props => props.withError && css`
    width: 100%;
    height: 100%;
    background-color: pink;
    cursor:pointer;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 15%;
      left: 92%;
      width: 20px;
      height: 3px;
      background-color: #444;
      transform: rotate(45deg);
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 15%;
      left: 92%;
      width: 20px;
      height: 3px;
      background-color: #444;
      transform: rotate(-45deg);
    }
    `}
`

export default ModalComponent