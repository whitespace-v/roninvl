import {createSlice} from "@reduxjs/toolkit";

interface MessageState {
    data: object;
    loading: boolean
    error: boolean
    success: boolean
}

const initialState: MessageState = {
    data:
        {
            age: '',
            group:
                {trainer: '', age: '', group: '', hood: '', address:''},
            name: '',
            phone: ''
        },
    loading: false,
    error: false,
    success: false
}

export const messageSlice = createSlice({
        name: 'message',
        initialState,
        reducers: {
            messageSending(state) {
                state.loading = true
                state.error = false;
            },
            messageSendingSuccess(state){
                state.loading = false;
                state.error = false;
                state.success = true
            },
            messageSendingError(state){
                state.error = true
                state.loading = false
                state.success = false
            }
        }
    }
)
export default messageSlice.reducer