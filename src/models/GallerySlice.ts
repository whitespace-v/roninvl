import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGallery} from "./IGallery";

interface GalleryState {
    gallery: IGallery[]
    loading: boolean
    error: boolean
}

const initialState: GalleryState = {
    gallery: [],
    loading: false,
    error: false
}

export const gallerySlice = createSlice({
        name: 'gallery',
        initialState,
        reducers: {
            galleryFetching(state) {
                state.loading = true
                state.error = false
                state.gallery = []
            },
            galleryFetchingSuccess(state, action: PayloadAction<IGallery[]>){
                state.loading = false;
                state.error = false;
                state.gallery = action.payload
            },
            galleryFetchingError(state){
                state.error = true;
                state.loading = false;
            },
        }
    }
)
export default gallerySlice.reducer