import React from 'react';
import classes from '../../scss/Intro.module.scss'
import Layout from "../../hoc/Layout";
import image from '../../assets/backintro.png'
import logo from '../../assets/logo.png'

const Intro = ({refProp}: {refProp: React.Ref<any>}) => {
    return (
        <div className={classes['Intro']} ref={refProp}
             style={{
                 backgroundImage: `url(${image})`,
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover'
        }}
        >
            <Layout>
                <div className={classes['Intro-layout']}>
                    <div className={classes['Intro__container']}>

                        <div className={classes['Intro__container-naming']}>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={classes['Intro__container-bottom']}>

                            <div className={classes['Intro__container-bottom-list']}>
                                <p>Киокусинкай карате</p>
                                <p>Дзюдо</p>
                                <p>Кудо</p>
                                <p>Кик-боксинг</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Intro;