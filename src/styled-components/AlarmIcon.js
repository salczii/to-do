import { ReactComponent as Alarm } from '../img/alarm.svg';
import styled from 'styled-components'

const AlarmIcon = styled(Alarm)`
    fill: ${props => props.important ? 'white' : 'transparent'};
`

export default AlarmIcon