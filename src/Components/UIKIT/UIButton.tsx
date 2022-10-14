import React from 'react';
import classes from '../../scss/UIButton.module.scss'

interface IUIButton {
    children: React.ReactNode;
    type: 'dark' | 'white';
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UIButton = (props : IUIButton) => {
    const cls = [classes['UIButton'], classes[props.type]]
    return (
        <div className={cls.join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default UIButton;