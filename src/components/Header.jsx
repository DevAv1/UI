import React from 'react';
import '../styles/header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';


export const Header = ({ openNav, setOpenNav }) => {

  const iconSize = "30px";
  const searchSize = "25px";
  
  return (
    <div className="header">
      <div className="header_left">
        <ArrowLeftIcon className="left_arrow_icon" style={{fontSize:iconSize}}/>
        <MenuIcon className="hamburger_icon" style={{fontSize:iconSize}} onClick={() => setOpenNav(!openNav)}/>
        <i class="fas fa-search" style={{fontSize:searchSize}}></i>
      </div>
      <div className="header_right">
        <button className="header_item">
          <i class="fas fa-plus" ></i><div className="add_project">Add Project</div>
        </button>
        <i class="fas fa-envelope header_item" style={{fontSize:iconSize}}></i>
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon style={{fontSize:iconSize}}/>
        </Badge>
        <Avatar alt="Avi Revah" className="header_item"/>
      </div>
    </div>
  )
}
