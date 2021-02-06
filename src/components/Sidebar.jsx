import React, { useEffect, useState } from 'react';
import '../styles/sidebar.css';

import Logo from '../assets/icons/Logo@1X.png';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import TodayIcon from '@material-ui/icons/Today';

import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ openNav, setOpenNav }) => {

  const location = useLocation();
  const [ currentPath, setCurrentPath ] = useState('')

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPath(currentPath)
  }, [location]);

  return (
    <div className={`sidebar${openNav ? " closed" : ""}`}>
      <div className="sidebar_wrapper">
        <div className="logo">
          <span className="logo_name"><img src={Logo} alt=""/></span>
        </div>
        <div className="sidebar-items">
          <ul>
            <Link to="/">
              <li className={currentPath === "/" && "active"}>
                <div className="sidebar_item_wrapper">
                  <HomeIcon className="sidebar_icon"/> Home
                </div>
              </li>
            </Link>
            
            <Link to="/workflow">
              <li className={currentPath === "/workflow" && "active"}>
                <div className="sidebar_item_wrapper">
                  <EqualizerIcon className="sidebar_icon"/>Workflow
                </div>
              </li>
            </Link>
            
            <li className={currentPath === "/statistics" && "active"}>
              <div className="sidebar_item_wrapper">
                <TimelineIcon className="sidebar_icon"/>Statistics
              </div>
            </li>
            <li className={currentPath === "/calendar" && "active"}>
              <div className="sidebar_item_wrapper">
                <TodayIcon className="sidebar_icon"/> Calendar
              </div>
            </li>
            <li className={currentPath === "/users" && "active"}>
              <div className="sidebar_item_wrapper">
                <GroupIcon className="sidebar_icon"/> Users
              </div>
            </li>
            <li className={currentPath === "/settings" && "active"}>
              <div className="sidebar_item_wrapper">
                <SettingsIcon className="sidebar_icon"/> Settings
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

