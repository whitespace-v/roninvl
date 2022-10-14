import React from 'react';
import {Transition} from "react-transition-group";
import {useAppSelector} from "../../hooks/redux";
import UISelectModal from "./UISelectModal";

const Modals = () => {
    const {select} = useAppSelector(state => state.modalReducer)

    return (
        <>
            <Transition in={select} timeout={200} mountOnEnter unmountOnExit>
                { state => <UISelectModal transition={state}/>}
            </Transition>
        </>
    );
};

export default Modals;