import styled from 'styled-components';

const SideDrawerDiv = styled.div`
    width: 80vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 100vw;
    z-index: 500;
    background: #fff;
    transition: .2s;
    transform:${props => props.show && 'translateX(-80vw)'};
`
export default SideDrawerDiv