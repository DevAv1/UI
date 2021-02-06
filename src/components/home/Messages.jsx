import React from 'react'
import '../../styles/home/messages.css';
import Avatar from '@material-ui/core/Avatar';
import BackArrow from '../../assets/icons/backwards.png';
import SettingsIcon from '../../assets/icons/Options@1X.png';
import {dueDateHandler, myCustomSort } from '../../timerStamper';

export const Messages = ({ userData }) => {

  const isNewMsg = (time) => {
    const today = Date.now();
    const msgDate = new Date(time).getTime();
    if(((today - msgDate) / 86400000) < 1) {
      return true;
    } else return false;
  }

  return (
    <div className="messages">
      {
        userData[0].users[0].messages.sort(myCustomSort).map((msg, i) => {
          return (
            <div className={`messages_box_main ${isNewMsg(msg.timestamp) ? "new_message" : ""}`}>
              <Avatar src={msg.avatar}/>
              <div className="messages_box_details">
                <div className="messages_user_time">
                  <div className="messager_author">{msg.author}</div>
                  <div className="time_statement">{dueDateHandler(msg.timestamp)}</div>
                </div>
                <div className="message">{msg.content}</div>
                <div className="messages_icons">
                  <img src={BackArrow} alt=""/>
                  <img src={SettingsIcon} alt=""/>
                </div>
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}
