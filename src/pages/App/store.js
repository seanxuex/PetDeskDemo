import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducer'

export default configureStore({
  reducer: {
    // the naming convention of this usually goes with each future
    // i.e. appointment: appointmentReducer
    // due to the size of this project, calling it appReducer for simplicity
    app: appReducer,
  },
})
