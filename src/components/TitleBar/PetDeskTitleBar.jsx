import PropTypes from 'prop-types'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import { StyledToolbar, StyledAppBar } from './styles'

import { THEMES } from '../../utils/constants'

function PetDeskTitleBar(props) {
  const { currentTheme, handleThemeChange } = props
  return (
    <StyledAppBar position="static" color="primary">
      <StyledToolbar>
        <h1>PetDesk Demo</h1>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={currentTheme === THEMES.DARK_THEME}
                onChange={handleThemeChange}
                aria-label="theme switch"
              />
            }
            label={
              currentTheme === THEMES.DARK_THEME ? 'Dark Theme' : 'Light Theme'
            }
          />
        </FormGroup>
      </StyledToolbar>
    </StyledAppBar>
  )
}

PetDeskTitleBar.propTypes = {
  currentTheme: PropTypes.string,
  handleThemeChange: PropTypes.func,
}

export default PetDeskTitleBar
