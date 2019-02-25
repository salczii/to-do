import styled from 'styled-components';

const Backdrop = styled.ul`
    display: ${props => props.show && 'flex'};
`

export default Backdrop