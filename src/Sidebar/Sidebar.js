import React, {useState} from 'react';
import { SidebarData } from './SidebarData';
import {Link} from 'react-router-dom';
import logo from '../images/logo1.png';
import giveMoney from '../images/give.png';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Toggle from '../Sidebar/Toggle';
import MenuIcon from '@material-ui/icons/Menu';

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div id="sidebarSec" className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                <MenuIcon className="toggle" onClick={showSidebar}/>
                <nav className="navbar">
                    <Link className="navbar-logo" to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <ul className="nav-menu-items">
                        {SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link className="nav-link" to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="premimu__upradge">
                        <img className="giveMoney" src={giveMoney} alt="Give money" />
                        <a href="btnUpradge">
                            Upradge to premium
                            <ArrowUpwardIcon />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;