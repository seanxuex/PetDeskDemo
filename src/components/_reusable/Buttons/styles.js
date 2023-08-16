import styled from 'styled-components'
import withTheme from '@mui/styles/withTheme'
import { Button } from '@mui/material'

/* eslint-disable indent */
/* stylelint-disable no-duplicate-selectors */
const StyledButton = withTheme(styled(Button)`
  && {
    min-height: 30px;
    min-width: 120px;
    margin-left: auto;
    margin-right: auto;
  }
`)

export { StyledButton }
