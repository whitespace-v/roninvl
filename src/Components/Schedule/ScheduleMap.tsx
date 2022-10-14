import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import classes from '../../scss/ScheduleMap.module.scss'
import logo from '../../assets/06.jpg'

const ScheduleMap = ({selected}: { selected: number }) => {
    return (
        <div className={classes['ScheduleMap']}>
            {selected === 0 &&
                <YMaps className={classes['ScheduleMap__ymaps']}>
                    <Map
                        className={classes['ScheduleMap__ymaps-map']}
                        defaultState={{ center: [43.156529, 131.8762852], zoom: 11 }}
                    >
                        <Placemark
                            geometry={[43.1001670, 131.9005010]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60]
                            }}
                        />
                        <Placemark
                            geometry={[43.2141049, 131.9493569]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60]
                            }}
                        />
                        <Placemark
                            geometry={[43.0868770, 131.8551225]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60],
                                iconImageBorder: 50,

                            }}
                        />
                        <Placemark
                            geometry={[43.0935695, 131.9232895]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60]
                            }}
                        />
                    </Map>
                </YMaps>
            }
            {selected === 1 &&
                <YMaps className={classes['ScheduleMap__ymaps']}>
                    <Map
                        className={classes['ScheduleMap__ymaps-map']}
                        defaultState={{ center: [43.1001709, 131.8983123], zoom: 14.5 }}
                    >
                        <Placemark
                            geometry={[43.1001670, 131.9005010]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60]
                            }}
                        />
                    </Map>
                </YMaps>
            }
            {selected === 2 &&
                <YMaps className={classes['ScheduleMap__ymaps']}>
                    <Map
                        className={classes['ScheduleMap__ymaps-map']}
                        defaultState={{ center: [43.1001709, 131.8983123], zoom: 14.5 }}
                    >
                        <Placemark
                            geometry={[43.1001670, 131.9005010]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60]
                            }}
                        />
                    </Map>
                </YMaps>
            }
            {selected === 3 &&
                <YMaps className={classes['ScheduleMap__ymaps']}>
                    <Map
                        className={classes['ScheduleMap__ymaps-map']}
                        defaultState={{ center: [43.1001709, 131.8983123], zoom: 14.5 }}
                    >
                        <Placemark
                            geometry={[43.1001670, 131.9005010]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: logo,
                                iconImageSize: [60, 60]
                            }}
                        />
                    </Map>
                </YMaps>
            }
        </div>
    );
};

export default ScheduleMap;