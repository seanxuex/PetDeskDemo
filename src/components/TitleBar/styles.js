import styled from 'styled-components'

import { Toolbar, AppBar } from '@mui/material'

const StyledToolbar = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

const StyledAppBar = styled(AppBar)`
  && {
    z-index: 2;
    position: fixed;
  }
`

export { StyledToolbar, StyledAppBar }
