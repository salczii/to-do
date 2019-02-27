import { ReactComponent as Trash } from '../img/trash.svg';
import styled from 'styled-components'

const TrashIcon = styled(Trash)`
    fill: ${props => props.important === 'true' ? 'white' : 'grey'};
`

export default TrashIcon