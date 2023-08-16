import PropTypes from 'prop-types'
import AppointmentItem from './AppointmentItem/AppointmentItem'

import { StyledContainer, StyledPanel, StyledTitle } from './styles'

function Appointment(props) {
  const { listOfUnconfirmed, listOfConfirmed, onConfirmApp, onUnconfirmApp } =
    props

  const mapUnconfirmedItems = () => {
    return listOfUnconfirmed.map(item => {
      return (
        <AppointmentItem
          confirmed={false}
          onConfirmApp={onConfirmApp}
          key={item.appointmentId}
          item={item}
        ></AppointmentItem>
      )
    })
  }

  const mapConfirmedItems = () => {
    return listOfConfirmed.map(item => {
      return (
        <AppointmentItem
          confirmed={true}
          onUnconfirmApp={onUnconfirmApp}
          key={item.appointmentId}
          item={item}
        ></AppointmentItem>
      )
    })
  }

  return (
    <StyledContainer>
      <StyledPanel>
        <StyledTitle variant="h2" gutterBottom>
          Unconfirmed
        </StyledTitle>
        {mapUnconfirmedItems()}
      </StyledPanel>
      <StyledPanel>
        <StyledTitle variant="h2" gutterBottom>
          Confirmed
        </StyledTitle>
        {mapConfirmedItems()}
      </StyledPanel>
    </StyledContainer>
  )
}

Appointment.propTypes = {
  onUnconfirmApp: PropTypes.func,
  onConfirmApp: PropTypes.func,
  listOfUnconfirmed: PropTypes.array,
  listOfConfirmed: PropTypes.array,
}

export default Appointment
