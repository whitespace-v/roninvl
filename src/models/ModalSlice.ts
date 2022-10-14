import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGroup} from "./IGroup";

interface ModalState {
    select: boolean
    data: IGroup
}

const initialState: ModalState = {
    select: false,
    data:
        {
            trainer: '',
            age: '',
            group: '',
            address: '',
            hood: ''
        }
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        selectModalHandler(state){
            state.select = !state.select
        },
        getSelectedData(state, action: PayloadAction<IGroup>){
            state.data = action.payload
        }
    }
})

export default modalSlice.reducer