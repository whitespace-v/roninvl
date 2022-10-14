import {AppDispatch} from "../store";
import {dataSlice} from "../../models/DataSlice";
import axios from "axios";
import {IGroup} from "../../models/IGroup";
import {modalSlice} from "../../models/ModalSlice";
import {gallerySlice} from "../../models/GallerySlice";
import {IGallery} from "../../models/IGallery";
import {messageSlice} from "../../models/MessageSlice";
import emailjs from '@emailjs/browser'
export const fetchData = (type: 'judo' | 'karate' | 'kick' | 'kudo') => async(dispatch: AppDispatch) => {
    try{
        dispatch(dataSlice.actions.dataFetching())
        const response = await axios.get<IGroup[]>
        (`https://ronin-191e8-default-rtdb.firebaseio.com/${type}.json`)
        dispatch(dataSlice.actions.dataFetchingSuccess(response.data))
    } catch (e) {
        dispatch(dataSlice.actions.dataFetchingError())
    }
}

export const fetchGallery = () => async(dispatch: AppDispatch) => {
    try{
        dispatch(gallerySlice.actions.galleryFetching())
        const response = await axios.get<IGallery[]>
        ('https://ronin-191e8-default-rtdb.firebaseio.com/gallery.json')
        dispatch(gallerySlice.actions.galleryFetchingSuccess(response.data))
    } catch (e) {
        dispatch(gallerySlice.actions.galleryFetchingError())
    }
}

export const modalHandler = (type: 'select') => (dispatch: AppDispatch) => {
    type === 'select' && dispatch(modalSlice.actions.selectModalHandler())
}

export const getSelectedData = (data: IGroup) => (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.selectModalHandler())
    dispatch(modalSlice.actions.getSelectedData(data))
}

export const sendMessage = (data: any) => async(dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.selectModalHandler()) //close modal after usage
    try {
        dispatch(messageSlice.actions.messageSending())
        await emailjs.send('service_1yt3qrb', 'template_k0wodim', data, 'ZqtynIVXpfqfYqXiC')
        dispatch(messageSlice.actions.messageSendingSuccess())
    } catch (e) {
        dispatch(messageSlice.actions.messageSendingError())
    }
}