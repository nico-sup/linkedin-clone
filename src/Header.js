import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {auth} from './firebase'
import {logout} from './features/userSlice'
import './styleMobile.css'

function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>
            <div className="header-left">
                <img src='img/linkedin.png'  alt="" />

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeIcon}  title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationIcon} title='Notifications' />
                <HeaderOption avatar='img/man.png' title='me' onClick={logoutOfApp} />
            </div>
            
        </div>
    )
}

export default Header
