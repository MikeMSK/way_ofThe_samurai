import React from 'react';
import s from "./Profile_Info.module.css"

export const Profile_Info = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
                    alt="panorama"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

