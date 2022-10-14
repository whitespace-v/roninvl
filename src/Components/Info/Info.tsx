import React, {useEffect, useRef, useState} from 'react';
import classes from '../../scss/Info.module.scss'
import Layout from "../../hoc/Layout";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import image0 from '../../assets/cards/0.png'
import image1 from '../../assets/cards/1.png'
import image2 from '../../assets/cards/2.png'
import image3 from '../../assets/cards/3.png'
import image4 from '../../assets/cards/4.png'
import image5 from '../../assets/cards/5.png'
import image6 from '../../assets/cards/6.png'
import image7 from '../../assets/cards/7.png'
import image8 from '../../assets/cards/8.png'
import back from "../../assets/info.png";
import backMobile from "../../assets/info_mobile.png";
import gsap from 'gsap';
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Info = ({refProp}: {refProp: React.Ref<any>}) => {
    const imageArray = [image0,image1,image2,image3,image4,image5,image6,image7,image8]
    const [trainersCounter, setTrainersCounter] = useState(0)
    const [gymsCounter, setGymsCounter] = useState(0)
    const [eventsCounter, setEventsCounter] = useState(0)
    // detect if visible
    const visibleRef = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(visibleRef, {})
    const isVisible = !!entry?.isIntersecting

    useEffect(() => {
        if (isVisible) {
            let trainers = {
                value: 0
            }
            gsap.to(trainers, {
                value: 10, duration: 2,
                onUpdate: () => setTrainersCounter(Math.round(trainers.value))
            })
        }
    },[isVisible])

    useEffect(() => {
        if (isVisible) {
            let gyms = {
                value: 0
            }
            gsap.to(gyms, {
                value: 21, duration: 2,
                onUpdate: () => setGymsCounter(Math.round(gyms.value))
            })
        }
    },[isVisible])

    useEffect(() => {
        if (isVisible) {
            let events = {
                value: 0
            }
            gsap.to(events, {
                value: 314, duration: 3,
                onUpdate: () => setEventsCounter(Math.round(events.value))
            })
        }
    },[isVisible])

    const {width} = useWindowDimensions()
    return (
        <div className={classes['Info']} ref={refProp}
             style={ width > 1300 ?
                 {
                     backgroundImage: `url(${back})`,
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover'
                 } :
                 {
                     backgroundImage: `url(${backMobile})`,
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover'
                 }
             }
        >
            <Layout>
                <div className={classes['Info__main']}>
                    <div className={classes['Info__main-quotes']}>
                        <p className={classes['Info__main-quotes-bold']}>Мы <br/>воспитываем <br/> чемпионов !</p>
                        <p className={classes['Info__main-quotes-thin']}>Мы будем тренировать наши <br/> сердца и тела для достижения <br/> твёрдого и непоколебимого духа!</p>
                    </div>
                    <div className={classes['Info__main-slider']}>
                        <Swiper
                            grabCursor={true}
                            effect={"creative"}
                            pagination={{dynamicBullets: true}}
                            spaceBetween={40}
                            slidesPerView={2.2}
                            centeredSlides={true}
                            creativeEffect={{prev: {translate: [-50, 10, -200],
                                    rotate: [-10,-10,0]}, next: {translate: ["100%", 0, 0]}}}
                            modules={[EffectCreative, Pagination]}
                        >
                            {imageArray.map(i => (
                                <SwiperSlide className={classes['Info__main-slider-item']} key={i}>
                                    <div  className={classes['Info__main-slider-item-container']}>
                                        <img src={i} alt=""/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
                <div className={classes['Info__bottom']} ref={visibleRef}>
                    <p>Тренерский состав:<span>{trainersCounter} человек</span></p>
                    <p>Залов во Владивостоке:<span>{gymsCounter} шт.</span></p>
                    <p>Проведено турниров:<span>{eventsCounter} по всему миру</span></p>
                </div>
            </Layout>
        </div>
    );
};

export default Info;