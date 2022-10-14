import React, {useState} from 'react';
import classes from '../../scss/Menu.module.scss'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {FaBars} from "react-icons/fa";
import {Transition} from "react-transition-group";

interface IMenu {
    IntroScroll: () => void
    InformationScroll: () => void
    ScheduleScroll: () => void
    GalleryScroll: () => void
}


const Menu = (props: IMenu) => {
    const { width } = useWindowDimensions(); //viewport width
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div className={classes['Menu']}>
                {width > 1050 &&
                    <div className={classes['Menu__nav']}>
                        <div className={classes['Menu__nav-item']} onClick={props.IntroScroll}>
                            Главная
                        </div>
                        <div className={classes['Menu__nav-item']} onClick={props.InformationScroll}>
                            Информация
                        </div>
                        <div className={classes['Menu__nav-item']} onClick={props.ScheduleScroll}>
                            Расписание
                        </div>
                        <div className={classes['Menu__nav-item']} onClick={props.GalleryScroll}>
                            Галлерея
                        </div>
                    </div>
                }
                {width < 1050 &&
                    <p className={classes['Menu-bars']}
                       onClick={() => setOpen(!open)}
                    >
                        <FaBars/>
                    </p>
                }
                <div className={classes['Menu__phone']}>
                    <a href="tel:+79003361949">+7 (900) 336-19-49</a>
                </div>

            </div>
            <Transition in={open} timeout={500} mountOnEnter unmountOnExit>
                { state =>
                    <div className={classes['Menu-opened'] + ' ' + classes[state]}
                    >
                        <div
                            className={classes['Menu__nav-item']}
                            onClick={() => {
                                props.IntroScroll()
                                setOpen(!open)
                            }}
                        >
                            Главная
                        </div>
                        <div
                            className={classes['Menu__nav-item']}
                            onClick={() => {
                                props.InformationScroll()
                                setOpen(!open)
                            }}
                        >
                            Информация
                        </div>
                        <div
                            className={classes['Menu__nav-item']}
                            onClick={() => {
                                props.ScheduleScroll()
                                setOpen(!open)
                            }}
                        >
                            Расписание
                        </div>
                        <div
                            className={classes['Menu__nav-item']}
                            onClick={() => {
                                props.GalleryScroll()
                                setOpen(!open)
                            }}
                        >
                            Галлерея
                        </div>
                    </div>
                }
            </Transition>
        </>
    );
};

export default Menu;