import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlTemplate } from '../../services/urlTemplates'
import { STATUS } from '../../utils/constants'
import { client } from '../../services/restCaller'

export const initialState = {
  unconfirmed: {},
  confirmed: {},
  status: STATUS.IDLE,
  error: null,
}

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadAll: (state, action) => {
      const [appointments] = action.payload
      appointments.foreach(item => {
        state.unconfirmed.set(item.appointmentId, item)
      })
    },
    confirmApp: (state, action) => {
      const appointmentId = action.payload
      const confirmedApp = state.unconfirmed[appointmentId]
      state.confirmed[appointmentId] = { ...confirmedApp }
      delete state.unconfirmed[appointmentId]
    },
    unconfirmApp: (state, action) => {
      const appointmentId = action.payload
      const confirmedApp = state.confirmed[appointmentId]
      state.unconfirmed[appointmentId] = { ...confirmedApp }
      delete state.confirmed[appointmentId]
    },
    reshceduleApp: (state, action) => {
      const { appointmentId, newTime } = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAll.pending, state => {
        state.status = STATUS.PENDING
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED
        const appointments = [...action.payload]
        appointments.forEach(item => {
          state.unconfirmed[item.appointmentId] = { ...item }
        })
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = STATUS.REJECTED
        state.error = action.error.message
      })
  },
})

export const { confirmApp, reshceduleApp, unconfirmApp } = counterSlice.actions

export const fetchAll = createAsyncThunk('app/getAllApp', async () => {
  const response = await client.get(urlTemplate.GET_ALL_UNCONFIRMED)
  return response.data
})

export default counterSlice.reducer
