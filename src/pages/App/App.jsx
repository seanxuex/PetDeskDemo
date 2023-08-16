import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import {
  selectUnconfirmedApps,
  selectStatus,
  selectConfirmedApps,
} from './selectors'
import { fetchAll, confirmApp, unconfirmApp } from './reducer'

import { STATUS } from '../../utils/constants'

import lightTheme from '../../utils/themes/lightTheme'
import darkTheme from '../../utils/themes/darkTheme'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import PetDeskTitleBar from '../../components/TitleBar/PetDeskTitleBar'
import Appointments from '../../components/Appointments/Appointments'

import { THEMES } from '../../utils/constants'

function App() {
  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [theme, setTheme] = useState(THEMES.LIGHT_THEME)
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const [error, setError] = useState('')

  const getAllUnConfirmedAppointments = useSelector(selectUnconfirmedApps)
  const getAllConfirmedAppointments = useSelector(selectConfirmedApps)
  const getCallStatus = useSelector(selectStatus)

  const onConfirmApp = useCallback(
    appId => {
      dispatch(confirmApp(appId))
    },
    [dispatch],
  )

  const onUnconfirmApp = useCallback(
    appId => {
      dispatch(unconfirmApp(appId))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  const handleThemeChange = () => {
    if (theme === THEMES.LIGHT_THEME) {
      setTheme(THEMES.DARK_THEME)
      setCurrentTheme(darkTheme)
    } else if (theme === THEMES.DARK_THEME) {
      setTheme(THEMES.LIGHT_THEME)
      setCurrentTheme(lightTheme)
    }
  }

  let content

  const allUnconfirmedAppValues = Object.values(getAllUnConfirmedAppointments)
  const allConfirmedAppValues = Object.values(getAllConfirmedAppointments)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <ErrorBoundary error={error}>
          <PetDeskTitleBar
            currentTheme={theme}
            handleThemeChange={handleThemeChange}
          />
          {(!allUnconfirmedAppValues ||
            allUnconfirmedAppValues.length === 0) && <div>No appointments</div>}
          {allUnconfirmedAppValues && allUnconfirmedAppValues.length > 0 && (
            <Appointments
              onUnconfirmApp={onUnconfirmApp}
              onConfirmApp={onConfirmApp}
              listOfUnconfirmed={allUnconfirmedAppValues}
              listOfConfirmed={allConfirmedAppValues}
            />
          )}
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
