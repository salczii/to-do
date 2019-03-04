import styled, { css } from 'styled-components';

const Backdrop = styled.div`
    /* display: ${props => props.withError ? 'none' : 'block'}; */
    width: 150%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color:rgba(15, 23, 40, .361);
    ${props => props.withError && css`
    transform:scale(8)
    `}
`

export default Backdrop