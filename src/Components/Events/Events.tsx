import React, {useEffect} from 'react';
import classes from '../../scss/Events.module.scss'
import {FaFolderOpen} from "react-icons/fa";
import Layout from "../../hoc/Layout";
import {fetchGallery} from "../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import UILoader from "../UIKIT/UILoader";

const Events = ({refProp}: {refProp: React.Ref<any>}) => {
    const dispatch = useAppDispatch()

    const {gallery, loading, error} = useAppSelector(state => state.galleryReducer)

    useEffect(() => {
        dispatch(fetchGallery())
    }, [])

    return (
        <div className={classes['Events']} ref={refProp}>
            <Layout>
                <div className={classes['Events__title']}>
                    Фотографии с мероприятий
                </div>

                <div className={classes['Events__container']}>
                    {loading && <UILoader/>}
                    {Object.entries(gallery).map(i => (
                        <div
                            className={classes['Events__container-item']}
                            onClick={() => window.open(i[1].link)}
                            key={i[0]}
                        >
                            <div className={classes['Events__container-item-icon']}>
                                <FaFolderOpen/>
                            </div>
                            <div className={classes['Events__container-item-name']}>
                                {i[1].name}
                            </div>
                            <div className={classes['Events__container-item-date']}>
                                {i[1].date}
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    );
};

export default Events;