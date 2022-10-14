import React from 'react';
import classes from '../../scss/UILoader.module.scss'
const UILoader = () => {
    return (
        <div className={classes["lds-roller"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default UILoader;