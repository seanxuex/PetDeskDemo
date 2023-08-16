import styled from 'styled-components'
import withTheme from '@mui/styles/withTheme'
import Card from '@mui/material/Card'

/* eslint-disable indent */
/* stylelint-disable no-duplicate-selectors */

const StyledCard = withTheme(styled(Card)`
  && {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`)

export { StyledCard }
