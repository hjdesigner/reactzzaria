import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CardActionArea as MaterialCardActionArea } from '@material-ui/core'

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: ${({ theme }) => theme.spacing(3, 0)};
`

export default CardActionArea
