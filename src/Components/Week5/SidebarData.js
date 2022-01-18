import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [

    {
        title: 'Inbox',
        path: '/',
        icon: <IoIcons.IoMdMail/>,
        className: 'nav-text'
    },
    {
        title: 'Likes',
        path: '/reports',
        icon: <AiIcons.AiFillHeart/>,
        className: 'nav-text'
    },
    {
        title: 'Friends',
        path: '/friends',
        icon: <FaIcons.FaUserFriends/>,
        className: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <AiIcons.AiFillMessage/>,
        className: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle/>,
        className: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting/>,
        className: 'nav-text'
    },
    
    


]