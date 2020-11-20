import React from 'react';
import HomeMain from '../HomeMain/HomeMain';

import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <HomeMain></HomeMain>
        </div>
    );
};

export default Header;