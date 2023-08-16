import { useState } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import dayjs from 'dayjs'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import PrimaryButton from '../../_reusable/Buttons/PrimaryButton'
import SecondaryButton from '../../_reusable/Buttons/SecondaryButton'

import { StyledCard } from './styles'

function AppointmentItem(props) {
  const { item, onConfirmApp, onUnconfirmApp, confirmed } = props
  const {
    appointmentId,
    appointmentType: type,
    requestedDateTimeOffset,
    user,
    animal,
  } = item
  const { firstName: userFirstName, lastName: userLastName } = user
  const { firstName: patientFirstName, species, breed } = animal

  const [rescheduling, setRescheduling] = useState(false)

  const [theDate, setTheDate] = useState(() => {
    return new Date(requestedDateTimeOffset)
  })

  const appDate = format(theDate, 'EEE, MMM dd yyyy')
  const appTime = format(theDate, ' h:mm a')

  const primaryButtonText = confirmed ? 'Unconfirm' : 'Confirm'

  const handlePrimaryOnClick = () => {
    if (confirmed) {
      return onUnconfirmApp(appointmentId)
    } else {
      return onConfirmApp(appointmentId)
    }
  }

  const rescheduleContent = () => {
    if (!rescheduling) {
      return (
        <SecondaryButton
          onClick={() => setRescheduling(true)}
          aria-label={'Reschedule'}
        >
          Reschedule
        </SecondaryButton>
      )
    } else {
      return (
        <DateTimePicker
          onAccept={newDate => {
            setTheDate(new Date(newDate))
            setRescheduling(false)
          }}
          defaultValue={dayjs(theDate)}
        />
      )
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCard raised>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {type}
            <br />
            Requested date: {appDate}
            <br />
            Requested time: {appTime}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            <p>
              Client: {userFirstName} {userLastName}
            </p>
            <p>
              Patient: {patientFirstName} who is{' '}
              {breed ? `a ${breed}` : 'an unknown'}{' '}
              {species ? species : 'animal'}
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <PrimaryButton
            aria-label={primaryButtonText}
            onClick={handlePrimaryOnClick}
          >
            {primaryButtonText}
          </PrimaryButton>
          {rescheduleContent()}
        </CardActions>
      </StyledCard>
    </LocalizationProvider>
  )
}

AppointmentItem.propTypes = {
  confirmed: PropTypes.bool,
  item: PropTypes.object,
  onConfirmApp: PropTypes.func,
  onUnconfirmApp: PropTypes.func,
}

export default AppointmentItem
