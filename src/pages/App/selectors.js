import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectAppDomain = state => state.app || initialState

const selectUnconfirmedApps = createSelector(
  selectAppDomain,
  appState => appState.unconfirmed,
)

const selectConfirmedApps = createSelector(
  selectAppDomain,
  appState => appState.confirmed,
)

const selectStatus = createSelector(
  selectAppDomain,
  appState => appState.status,
)

export { selectUnconfirmedApps, selectConfirmedApps, selectStatus }
