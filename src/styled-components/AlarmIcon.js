import { ReactComponent as Alarm } from '../img/alarm.svg';
import styled, { css, keyframes } from 'styled-components';
import "base";

const iconAnimation = keyframes`
  from {
    fill: #fff;
  }

  to {
    fill: red;
  }
`;

const AlarmIcon = styled(Alarm)`
    width: 1.4rem;
    height: 1.4rem;
    fill: transparent;
    ${props => props.important === "true" && css`
    animation: ${iconAnimation} 2s linear infinite
    `};
`

export default AlarmIcon

