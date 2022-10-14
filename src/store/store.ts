import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dataReducer from '../models/DataSlice';
import modalReducer from '../models/ModalSlice';
import galleryReducer from '../models/GallerySlice';

const rootReducer = combineReducers({
    dataReducer, modalReducer, galleryReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']