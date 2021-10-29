import { configureStore } from "@reduxjs/toolkit";
import oneslice from '../redux/reduser'

const store = configureStore({
	reducer: {
		one: oneslice
	}
})
export default store;