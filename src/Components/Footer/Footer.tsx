import React from 'react';
import classes from '../../scss/Footer.module.scss'
import Layout from "../../hoc/Layout";
import {FaInstagram, FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import image from '../../assets/Footer.png'
import bg from "../../assets/background.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface IFooter {
    IntroScroll: () => void
    InformationScroll: () => void
    ScheduleScroll: () => void
    GalleryScroll: () => void
}

const Footer = (props: IFooter) => {
    const {width} = useWindowDimensions()
    return (
        <div className={classes['Footer']}
             style={{
                 backgroundImage: `url(${image})`,
                 // backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}
        >
            <Layout>
                <div className={classes['Footer-layout']}>
                    <div className={classes['Footer__naming']}>
                        <div className={classes['Footer__naming-name']}>
                            <p>RONIN</p>
                            <p>fight club</p>
                        </div>
                        <div className={classes['Footer__naming-options']}>
                            <p>Дзюдо</p>
                            <p>Кик-боксинг</p>
                            <p>Киокушинкай карате</p>
                        </div>
                    </div>
                    <div className={classes['Footer__nav']}>
                        <div
                            className={classes['Footer__nav-item']}
                            onClick={props.IntroScroll}
                        >
                            Главная
                        </div>
                        <div
                            className={classes['Footer__nav-item']}
                            onClick={props.InformationScroll}
                        >
                            Информация
                        </div>
                        <div
                            className={classes['Footer__nav-item']}
                            onClick={props.ScheduleScroll}
                        >
                            Расписание
                        </div>
                        <div
                            className={classes['Footer__nav-item']}
                            onClick={props.GalleryScroll}
                        >
                            Галлерея
                        </div>

                    </div>
                    { width > 550 ?
                        <div className={classes['Footer__contacts']}>
                            <a href="https://instagram.com/ronin_fight_club_vl"><FaInstagram/>ronin_fight_club_vl</a>
                            <a href="tel:+79003361949"><FaPhoneAlt/> +7 (900) 336-19-49</a>
                            <a href="https://wa.me/+79003361949"><FaWhatsapp/> +7 (900) 336-19-49</a>
                        </div>
                        :
                        <div className={classes['Footer__contacts']}>
                            <a href="https://instagram.com/ronin_fight_club_vl"><FaInstagram/></a>
                            <a href="tel:+79003361949"><FaPhoneAlt/></a>
                            <a href="https://wa.me/+79003361949"><FaWhatsapp/></a>
                        </div>
                    }

                </div>
            </Layout>
        </div>
    );
};

export default Footer;