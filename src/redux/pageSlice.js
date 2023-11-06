import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 'home',
}

export const pageSlicer = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
})
export const { setPage } = pageSlicer.actions

export default pageSlicer.reducer