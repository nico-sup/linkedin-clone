import { Avatar } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'
import './styleMobile.css'

function Sidebar() {
    
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='img/background.jpg' alt='' />
                <Avatar  className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2.543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2.543</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("web developer")}
                {recentItem("design")}
                {recentItem("threejs")}
                {recentItem("portfolio")}
            </div>

        </div>
    )
}

export default Sidebar
