import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <img
                src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
                alt="panorama"/>
            Main content
            <MyPosts/>
        </div>
    );
};

