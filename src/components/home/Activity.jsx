import React from 'react'
import '../../styles/home/activity.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Avatar from '@material-ui/core/Avatar';
import { dueDateHandler, myCustomSort } from '../../timerStamper';

export const Activity = ({ userData }) => {

  return (
    <div className="activity">
      {
        userData[0].activities.sort(myCustomSort).map((activity, i) => {
          return (
          <div className="activity_row" key={activity.id}>
            <Avatar src={activity.avatar}/>
            <div className="activity_item">
              <div className="user_log_project">
                <div className="full_name">{activity.full_name}</div>
                <div className="action">{activity.action}</div>
                <div className="task">{activity.task_name}</div>
              </div>
              <div className="activity_time">
                <AccessAlarmIcon />
                <span>{dueDateHandler(activity.timestamp)}</span>
              </div>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}