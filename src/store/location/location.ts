import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
	name: 'location',
	initialState: {
		location: '',
	},
	reducers: {
		changeLocation: (state, action) => {
			state.location = action.payload
		},
	},
})

export const { changeLocation } = locationSlice.actions

export default locationSlice.reducer
