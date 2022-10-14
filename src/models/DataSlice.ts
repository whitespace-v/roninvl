import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGroup} from "./IGroup";


interface DataState {
    groups: IGroup[];
    selectedType: string;
    loading: boolean;
    success: boolean
    error: boolean;
}

const initialState: DataState = {
    groups: [],
    selectedType: 'karate',
    loading: false,
    success: false,
    error: false
}

export const dataSlice = createSlice({
        name: 'groups',
        initialState,
        reducers: {
            dataFetching(state) {
                state.loading = true
                state.success = false
                state.error = false
                state.groups = []
            },
            dataFetchingSuccess(state, action: PayloadAction<IGroup[]>){
                state.loading = false;
                state.error = false;
                state.success = true;
                state.groups = action.payload
            },
            dataFetchingError(state){
                state.error = true;
                state.loading = false;
                state.success = false;
            },
        }
    }
)
export default dataSlice.reducer