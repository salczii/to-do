import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ControlLinkEle = styled(Link)`
    color: pink;
    list-style: none;
    cursor: pointer;
    /* ${props => props.active & css`
    color: grey;
    &::before{
        content: '',
        width: 2px;
        height: 2px;
        background-color: pink;
        display:block;
    }
    `} */
`

export default ControlLinkEle