import React, {useEffect, useRef} from 'react';
import classes from '../../scss/Schedule.module.scss'
import image0 from '../../assets/karate.png'
import image1 from '../../assets/kick.png'
import image2 from '../../assets/judo.jpg'
import image3 from '../../assets/kudo.jpg'
import bg from "../../assets/background.png";
import ScheduleCard from "./ScheduleCard";
import gsap from "gsap";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useWindowDimensions from "../../hooks/useWindowDimensions";


const Schedule = ({refProp}: {refProp: React.Ref<any>}) => {
    // refs for images
    const ref0 = useRef<HTMLDivElement | null>(null)
    const ref1 = useRef<HTMLDivElement | null>(null)
    const ref2 = useRef<HTMLDivElement | null>(null)
    const ref3 = useRef<HTMLDivElement | null>(null)
    const isVisible0 = !!useIntersectionObserver(ref0, {})?.isIntersecting
    const isVisible1 = !!useIntersectionObserver(ref1, {})?.isIntersecting
    const isVisible2 = !!useIntersectionObserver(ref2, {})?.isIntersecting
    const isVisible3 = !!useIntersectionObserver(ref3, {})?.isIntersecting
    //refs for text
    const ref4 = useRef<HTMLDivElement | null>(null)
    const ref5 = useRef<HTMLDivElement | null>(null)
    const ref6 = useRef<HTMLDivElement | null>(null)
    const ref7 = useRef<HTMLDivElement | null>(null)
    const isVisible4 = !!useIntersectionObserver(ref4, {})?.isIntersecting
    const isVisible5 = !!useIntersectionObserver(ref5, {})?.isIntersecting
    const isVisible6 = !!useIntersectionObserver(ref6, {})?.isIntersecting
    const isVisible7 = !!useIntersectionObserver(ref7, {})?.isIntersecting
    //refs for titles
    const ref8 = useRef<HTMLDivElement | null>(null)
    const ref9 = useRef<HTMLDivElement | null>(null)
    const ref10 = useRef<HTMLDivElement | null>(null)
    const ref11 = useRef<HTMLDivElement | null>(null)
    const isVisible8 = !!useIntersectionObserver(ref8, {})?.isIntersecting
    const isVisible9 = !!useIntersectionObserver(ref9, {})?.isIntersecting
    const isVisible10 = !!useIntersectionObserver(ref10, {})?.isIntersecting
    const isVisible11 = !!useIntersectionObserver(ref11, {})?.isIntersecting

    //image animations
    useEffect(() => {
        isVisible0 && gsap.to([ref0.current], {x: 0, duration: 2})
    },[isVisible0])

    useEffect(() => {
        isVisible1 && gsap.to([ref1.current], {x: 0, duration: 2})
    },[isVisible1])

    useEffect(() => {
        isVisible2 && gsap.to([ref2.current], {x: 0, duration: 2})
    },[isVisible2])

    useEffect(() => {
        isVisible3 && gsap.to([ref3.current], {x: 0,  duration: 2})
    },[isVisible3])

    //text animations
    useEffect(() => {
        isVisible4 && gsap.to([ref4.current], {opacity: 1,  duration: 2})
    },[isVisible4])

    useEffect(() => {
        isVisible5 && gsap.to([ref5.current], {opacity: 1,  duration: 2})
    },[isVisible5])

    useEffect(() => {
        isVisible6 && gsap.to([ref6.current], {opacity: 1,  duration: 2})
    },[isVisible6])

    useEffect(() => {
        isVisible7 && gsap.to([ref7.current], {opacity: 1,  duration: 2})
    },[isVisible7])

    //title animations
    useEffect(() => {
        isVisible8 && gsap.to([ref8.current], {y: 0,  duration: 2})
    },[isVisible8])

    useEffect(() => {
        isVisible9 && gsap.to([ref9.current], {y: 0,  duration: 2})
    },[isVisible9])

    useEffect(() => {
        isVisible10 && gsap.to([ref10.current], {y: 0,  duration: 2})
    },[isVisible10])

    useEffect(() => {
        isVisible11 && gsap.to([ref11.current], {y: 0,  duration: 2})
    },[isVisible11])

    const {width} = useWindowDimensions()

    return (
        <div className={classes['Schedule']}
             style={{
                 backgroundImage: `url(${bg})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}
        >
            <div className={classes['Schedule__info1']}>
                <div className={classes['Schedule__info1-image']} ref={ref0}>
                    <img src={image0} alt=""/>
                </div>
                <div className={classes['Schedule__info1-text']}>
                    <div className={classes['Schedule__info1-text-title']} ref={ref8}>
                        ?????????????????????? ????????????
                    </div>
                    <div className={classes['Schedule__info1-text-about']} ref={ref4}>
                        ?????????? ???????????????????? ?????? ???????????? ?? ???????????????????? ?????????????????? ?????????????????????????? ???????? ??
                        ???????????? ???????????????? ?????????????? ?????? ??????????????????. ???????????????????????? ???????? ???????? ??????????????????
                        ????????????, ???????????????????? ???????????????????? ???????????????? ???????????????????????? ???? ???????????? ??????????????, ??
                        ?????????? ?????? ?? ???????????? ???????? ???????????? ???????????????????? ???????????? ????????????.
                    </div>
                </div>
            </div>
            {width > 1200 ?
                <div className={classes['Schedule__info2']}>
                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-text-title']} ref={ref9}>
                            ??????-??????????????
                        </div>
                        <div className={classes['Schedule__info2-text-about']} ref={ref5}>
                            ???????????????????? ???????????????? ?????????????????? ?? ???????????????? ?????????? ????????????.
                            ?????????? ???????????? ?????????????? ?????????????? ?????? ???????????????????? ?????????????????? ??????????????????????,
                            ?????? ?? ??????????. ???????????????? ???????????????????????? ?? ???????????????????? ??????,
                            ?? ???????????????? ?????????????????? ?????????????????? ???? ????????????????, ?????????????? ???????????? ?? ????????????????????.
                        </div>
                    </div>

                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-image']} ref={ref1}>
                            <img src={image1} alt=""/>
                        </div>
                    </div>
                </div>
                :
                <div className={classes['Schedule__info2']}>
                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-image']} ref={ref1}>
                            <img src={image1} alt=""/>
                        </div>
                    </div>
                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-text-title']} ref={ref9}>
                            ??????-??????????????
                        </div>
                        <div className={classes['Schedule__info2-text-about']} ref={ref5}>
                            ???????????????????? ???????????????? ?????????????????? ?? ???????????????? ?????????? ????????????.
                            ?????????? ???????????? ?????????????? ?????????????? ?????? ???????????????????? ?????????????????? ??????????????????????,
                            ?????? ?? ??????????. ???????????????? ???????????????????????? ?? ???????????????????? ??????,
                            ?? ???????????????? ?????????????????? ?????????????????? ???? ????????????????, ?????????????? ???????????? ?? ????????????????????.
                        </div>
                    </div>


                </div>
            }

            <div className={classes['Schedule__info1']}>
                <div className={classes['Schedule__info1-image']} ref={ref2}>
                    <img src={image2} alt=""/>
                </div>
                <div className={classes['Schedule__info1-text']}>
                    <div className={classes['Schedule__info1-text-title']} ref={ref10}>
                        ??????????
                    </div>
                    <div className={classes['Schedule__info1-text-about']} ref={ref6}>
                        ???????????? ??? ???????????????? ???????????? ??????????????????, ?????????????????? ?? ???????????????????? ???????????????????????? ?????? ????????????,
                        ?????????????????? ?? ?????????? XIX ???????? ???? ???????????? ????????????????. ?? ?????????????? ???? ??????????, ???????????? ?? ???????????? ??????????
                        ?????????????????????? ?? ?????????????????????????? ?????????????? ???????????????? ?? ????????????, ???????????? ?????????? ???????????????????? ????????????,
                        ?????????????? ????????????, ?????????????????? ?? ????????????????, ?????? ?? ????????????, ?????? ?? ?? ??????????????.
                    </div>
                </div>
            </div>
            {width > 1200 ?
                <div className={classes['Schedule__info2']}>
                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-text-title']} ref={ref11}>
                            ????????
                        </div>
                        <div className={classes['Schedule__info2-text-about']} ref={ref7}>
                            ???????? ??? ?????????????????????? ?????????????????????????????? ???????????? ????????????????????????, ?????????????????? ?? 1981 ????????
                            ???????????????? ?????????????????? ?????????????????????? ?????????????? ???????????? ???? ???????????? ?????? ???????????? ?? ???????????? ????????????????????,
                            ???????????? ??????????, ?????????????? ??????????.
                        </div>
                    </div>

                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-image']} ref={ref3}>
                            <img src={image3} alt=""/>
                        </div>
                    </div>
                </div>
                :
                <div className={classes['Schedule__info2']}>
                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-image']} ref={ref3}>
                            <img src={image3} alt=""/>
                        </div>
                    </div>
                    <div className={classes['Schedule__info2-text']}>
                        <div className={classes['Schedule__info2-text-title']} ref={ref11}>
                            ????????
                        </div>
                        <div className={classes['Schedule__info2-text-about']} ref={ref7}>
                            ???????? ??? ?????????????????????? ?????????????????????????????? ???????????? ????????????????????????, ?????????????????? ?? 1981 ????????
                            ???????????????? ?????????????????? ?????????????????????? ?????????????? ???????????? ???? ???????????? ?????? ???????????? ?? ???????????? ????????????????????,
                            ???????????? ??????????, ?????????????? ??????????.
                        </div>
                    </div>
                </div>


            }

            <ScheduleCard
                refProp={refProp}
            />
        </div>
    );
};

export default Schedule;