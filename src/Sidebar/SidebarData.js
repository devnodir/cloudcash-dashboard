import React from "react";
import AssessmentIcon from '@material-ui/icons/Assessment';
import ListIcon from '@material-ui/icons/List';
import PaymentIcon from '@material-ui/icons/Payment';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AssessmentIcon />,
        cName: 'nav-text active'
    },
    {
        title: 'Transactions',
        path: '/',
        icon: <ListIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Cards',
        path: '/',
        icon: <PaymentIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Invoices',
        path: '/',
        icon: <InsertDriveFileIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Goals',
        path: '/',
        icon: <TrackChangesIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/',
        icon: <SettingsIcon />,
        cName: 'nav-text'
    }
]