import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = `https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/calls?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI`

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

export const deletTodod = createAsyncThunk(
	'todo/deleteTodo',
	async function (id, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(url + `/${id}`, {
				method: 'DELETE',
			})
			if (!response.ok) {
				throw new Error('delet error')
			}
			dispatch(removeTodo(id))
		} catch (error: any) {
			return rejectWithValue(error.message)
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
		removeTodo: (state, actions) => {
			state.todo = state.todo.filter(e => e.id !== actions.payload)
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

export const { removeTodo } = oneslice.actions

export default oneslice.reducer