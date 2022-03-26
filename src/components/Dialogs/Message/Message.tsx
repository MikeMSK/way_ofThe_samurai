import React, {FC} from 'react';
import s from "./../Dialogs.module.css"
import {MessagesType} from "../../../Redux/dialogs_reducer";


export const Message: FC<MessagesType> = (props) => {
        return (
            <div className={s.message}>
                {props.message}
            </div>

        )
    }