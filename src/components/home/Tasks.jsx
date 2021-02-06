import React, { useEffect, useState } from 'react'
import '../../styles/home/tasks.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { myCustomTasksSort, tasksDueDateHandler } from '../../timerStamper';

export const Tasks = ({ userData }) => {

  return (
    <div className="tasks">
      {
        userData[0].users[0].tasks.sort(myCustomTasksSort).map((task) => {
          return (
            <div className="tasks_box_main">
              <div className="tasks_box_leftside">
                <div className="letter_circle">{task.task_content.slice(0,1)}</div>
                <div className="task_details">
                <div>{task.task_content}</div>
                <div className={`task_timestamp ${tasksDueDateHandler(task.due_date).search("delay") !== -1 && 'urgent'}`}><AccessAlarmIcon /><p>{tasksDueDateHandler(task.due_date)}</p></div>
                </div>
              </div>
              <MoreVertIcon id="more_btn"/>
            </div>
          )
        })
      }
      
    </div>
  )
}
