import styled from 'styled-components'
import withTheme from '@mui/styles/withTheme'
import Typography from '@mui/material/Typography'

/* eslint-disable indent */
/* stylelint-disable no-duplicate-selectors */

const StyledContainer = withTheme(styled.div`
  && {
    justify-content: space-between;
    padding: 10vh 2vw;
    display: flex;
    width: 100vw;
    background-color: ${props => props.theme.palette.main.background};
  }
`)

const StyledPanel = withTheme(styled.div`
  && {
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`)

const StyledTitle = withTheme(styled(Typography)`
  && {
    color: ${props => props.theme.palette.main.title};
  }
`)

export { StyledContainer, StyledPanel, StyledTitle }
