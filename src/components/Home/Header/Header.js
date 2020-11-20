import React from 'react';
import './Header.css';
import HomeMain from '../HomeMain/HomeMain';

import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <div className='header-bg'>
            <NavigationBar></NavigationBar>
            <HomeMain></HomeMain>
        </div>
    );
};

export default Header;