import PropTypes from 'prop-types'

import { StyledButton } from './styles'

function PrimaryButton(props) {
  const { children } = props

  return (
    <StyledButton variant="contained" {...props}>
      {children}
    </StyledButton>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.any,
}

export default PrimaryButton
