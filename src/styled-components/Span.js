import styled, { css } from 'styled-components';

const Span = styled.span`
    display: block;
    width: 100px;
    height: 20px;
    background-color: #eee;
    border: 1px solid black;
    border-radius: 5px;
    position:absolute;
    cursor:pointer;
    &:before{
        content: '';
        display: block;
        position: absolute;
        width:10px;
        height:10px;
        top:25%;
        left:3px;
        border-radius: 50%;
        background-color: grey;
    }
    ${props => props.theme === 'true' && css`
        background-color: grey;
        &:after{
        content: '';
        display: block;
        position: absolute;
        width:10px;
        height:10px;
        top:25%;
        right: 3px;
        border-radius: 50%;
        background-color: white;
    }
    `}

`
export default Span