import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import Toggle from '../Sidebar/Toggle';

const Header = () => {
    return (
        <div className="header">
            <Toggle />
            <div className="texts">
                <h2>Weekly Sumup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="tabs">
                <EmailIcon className="icons" />
                <NotificationsIcon className="icons" />
                <div className="profile">
                    <div></div>
                    <span>
                        <p className="name">Andrew</p>
                        <p className="info">Admin account</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;