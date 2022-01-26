import React from 'react';
import s from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
                alt="panorama"/>
            Main content
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        post_1
                    </div>
                    <div className={s.item}>
                        post_2
                    </div>
                </div>
            </div>
        </div>
    );
};

