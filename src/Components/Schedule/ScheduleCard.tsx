import React, {useEffect, useState} from 'react';
import classes from "../../scss/ScheduleCard.module.scss";
import Layout from "../../hoc/Layout";
import {fetchData, getSelectedData} from "../../store/reducers/ActionCreators";
import ScheduleMap from "./ScheduleMap";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import UILoader from "../UIKIT/UILoader";
import {Transition} from "react-transition-group";

const ScheduleCard = ({refProp}: {refProp: React.Ref<any>}) => {
    const [selected,setSelected] = useState(0)
    const {groups, loading, error} = useAppSelector(state => state.dataReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData('karate'))
    }, [])


    const selectHandler = (
        trainer: string, age: string, group: string,
        hood: string, address: string
    ) => {
        let data = {
            trainer,age, group, hood,address
        }
        dispatch(getSelectedData(data))
    }

    return (
        <div className={classes['ScheduleCard']}
             ref={refProp}
        >
            <Layout>
                <div className={classes['ScheduleCard-container']}>
                    <p className={classes['ScheduleCard-title']}>Наши залы</p>
                    <div className={classes['ScheduleCard-menu']}>
                        <div
                            className={
                                selected === 0 ?
                                    classes['ScheduleCard-menu-item']+ ' ' + classes['active']
                                    :
                                    classes['ScheduleCard-menu-item']
                            }
                            onClick={() => {
                                dispatch(fetchData('karate'))
                                setSelected(0)
                            }}
                        >Карате</div>
                        <div
                            className={
                                selected === 1 ?
                                    classes['ScheduleCard-menu-item'] + ' ' + classes['active']
                                    :
                                    classes['ScheduleCard-menu-item']
                            }
                            onClick={() => {
                                dispatch(fetchData('kick'))
                                setSelected(1)
                            }}
                        >Кик-боксинг</div>
                        <div
                            className={
                                selected === 2 ?
                                    classes['ScheduleCard-menu-item'] + ' ' + classes['active']
                                    :
                                    classes['ScheduleCard-menu-item']
                            }

                            onClick={() => {
                                dispatch(fetchData('judo'))
                                setSelected(2)
                            }}
                        >Дзюдо</div>
                        <div
                            className={
                                selected === 3 ?
                                    classes['ScheduleCard-menu-item'] + ' ' + classes['active']
                                    :
                                    classes['ScheduleCard-menu-item']
                            }

                            onClick={() => {
                                dispatch(fetchData('kudo'))
                                setSelected(3)
                            }}
                        >Кудо</div>
                    </div>
                    <div className={classes['ScheduleCard-status']}>
                        {loading && <UILoader/>}
                        {error && <p>Произошла ошибка, попробуйте позже...</p>}
                    </div>
                    <div className={classes['ScheduleCard-info']}>
                        {/*todo: do animate*/}
                        {/*<Transition in={groups} timeout={200} mountOnEnter unmountOnExit>*/}
                        {/*    { state =>*/}
                        {/*        <FullVisible*/}
                        {/*            setFullVisible={setFullVisible}*/}
                        {/*            slidesArray={slidesArray}*/}
                        {/*            transition={state}*/}
                        {/*        />*/}
                        {/*    }*/}
                        {/*</Transition>*/}
                        {Object.entries(groups).map(group => (
                            <div className={classes['ScheduleCard-info-item']} key={group[0]}
                                 onClick={() => selectHandler(
                                     group[1].trainer,
                                     group[1].age,
                                     group[1].group,
                                     group[1].hood,
                                     group[1].address
                                 )}
                            >
                                <p>Тренер: <span>{group[1].trainer}</span></p>
                                <p>Возраст: <span>{group[1].age} лет</span></p>
                                <p>Группа: <span>{group[1].group}</span></p>
                                <p>Район: <span>{group[1].hood}</span></p>
                                <p>Адрес: <span>{group[1].address}</span></p>
                            </div>
                        ))}
                    </div>
                    <ScheduleMap selected={selected}/>
                </div>
            </Layout>
        </div>
    );
};

export default ScheduleCard;