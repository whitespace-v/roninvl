import React, {useState} from 'react';
import classes from '../../scss/UISelectModal.module.scss'
import {modalHandler, sendMessage} from "../../store/reducers/ActionCreators";
import {FaTimes} from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import InputMask from "react-input-mask";
import {IGroup} from "../../models/IGroup";

const UISelectModal = ({transition}: {transition: string}) => {
    const dispatch = useAppDispatch()
    const {data} = useAppSelector(state => state.modalReducer)
    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState<boolean>(false)
    const [nameError, setNameError] = useState<boolean>()

    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState<boolean>(false)
    const [phoneError, setPhoneError] = useState<boolean>()

    const [age, setAge] = useState('')
    const [ageTouched, setAgeTouched] = useState<boolean>()
    const [ageError, setAgeError] = useState<boolean>()


    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPhoneTouched(true)
        setPhone(e.target.value)
        if (phoneTouched && e.target.value.replace(/\D/g, "").length < 11) {
            setPhoneError(true)
        }
        if (phoneTouched && e.target.value.replace(/\D/g, "").length === 11) {
            setPhoneError(false)
        }
    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNameTouched(true)
        setName(e.target.value)
        if (nameTouched && e.target.value.length < 1) {
            setNameError(true)
        }
        if (nameTouched && e.target.value.length > 0) {
            setNameError(false)
        }
    }

    const checkForm = () => {
        let counter = 0

        if (name.length < 1) {
            counter += 1
            setNameError(true)
        }
        if (age.length < 1) {
            counter += 1
            setAgeError(true)
        }
        if (phone.replace(/\D/g, "").length < 11){
            counter += 1
            setPhoneError(true)
        }

        return counter
    }

    const ageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setAgeTouched(true)
        setAge(e.target.value)
        if (ageTouched && e.target.value.length < 1) {
            setAgeError(true)
        }
        if (e.target.value.length > 0) {
            setAgeError(false)
        }
    }

    const sendHandler = (e: React.MouseEvent<HTMLDivElement>, group: IGroup) => {
        e.preventDefault()
        if (checkForm() < 1) {
            const data = {name, age, phone, group}
            setPhone('')
            setName('')
            setAge('')
            dispatch(sendMessage(data))
        }
    }

    return (
        <div className={classes['UISelectModal'] + ' ' + classes[transition]}>
            <div className={classes['UISelectModal__box'] + ' ' + classes[transition]}
                 onClick={e => e.stopPropagation()}
            >
                <p className={classes['UISelectModal__box-title']}>?????????????? ???????? ????????????</p>
                <div className={classes['Input']}>
                    <p className={classes['title']}>??????</p>
                    <input type="text" value={name} maxLength={15} onChange={e => nameHandler(e)}/>
                    {nameError && <p className={classes['error']}>???????????????????????? ??????</p>}
                </div>
                <div className={classes['Input']}>
                    <p className={classes['title']}>??????????????</p>
                    <input type="text" value={age} maxLength={2} onChange={e => ageHandler(e)}/>
                    {ageError && <p className={classes['error']}>???????????????????????? ??????????????</p>}
                </div>
                <div className={classes['Input']}>
                    <p className={classes['title']}>??????????????</p>
                    <InputMask
                        type="text" value={phone} mask="+7\(999) 999-99-99"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => phoneHandler(e)}
                    />
                    {phoneError && <p className={classes['error']}>???????????????????????? ?????????? ????????????????</p>}
                </div>
                <div className={classes['Group']}>
                    <div>
                        <p><span>????????????:</span> {data.trainer}</p>
                        <p><span>??????????????:</span> {data.age}</p>
                        <p><span>????????????:</span> {data.group}</p>
                        <p><span>??????????:</span> {data.hood}</p>
                        <p><span>??????????:</span> {data.address}</p>
                    </div>
                </div>
                <div className={classes['Button']}
                    onClick={e => sendHandler(e, data)}
                >
                    <button>????????????????????</button>
                </div>
            </div>
            <div
                className={classes['Exit']}
            >
                <FaTimes
                    onClick={() => dispatch(modalHandler('select'))}
                />
            </div>
        </div>
    );
};

export default UISelectModal;