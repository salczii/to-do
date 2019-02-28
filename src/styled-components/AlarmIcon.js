import { ReactComponent as Alarm } from '../img/alarm.svg';
import styled from 'styled-components';
import "base";

const AlarmIcon = styled(Alarm)`
    width: 1.4rem;
    height: 1.4rem;
    fill: ${props => props.important === 'true' ? 'white' : 'transparent'};
`

export default AlarmIcon