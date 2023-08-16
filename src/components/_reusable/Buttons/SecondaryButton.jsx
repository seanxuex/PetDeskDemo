import PropTypes from 'prop-types'

import { StyledButton } from './styles'

function SecondaryButton(props) {
  const { children } = props

  return (
    <StyledButton variant="outlined" {...props}>
      {children}
    </StyledButton>
  )
}

SecondaryButton.propTypes = {
  children: PropTypes.any,
}

export default SecondaryButton
