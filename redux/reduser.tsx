import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = 'https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/calls?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI'

export const fetchAction = createAsyncThunk(
	'todo/fetchAction',
	async function (_, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Server Error')
			}
			const data = await response.json()
			return data

		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)




const oneslice = createSlice({
	name: 'one',
	initialState: {
		todo: [
			{ id: 1, name: 'Alexey' },
			{ id: 2, name: 'Vika' },
		]
	},
	reducers: {
		FetchState: (state, actions) => {
			state.todo += actions.payload
		}
	},
	extraReducers: {
		[fetchAction.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchAction.fulfilled]: (state, action) => {
			state.status = 'resolve'
			state.todo = action.payload
		},
		[fetchAction.rejected]: (state, action) => {
			state.status = 'rejected'
			state.eroor = action.payload
		}

	}
})

export const { FetchState } = oneslice.actions

export default oneslice.reducer