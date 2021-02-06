import React from 'react'
import '../styles/home.css';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Card } from '../components/Card';
import { Tasks } from '../components/home/Tasks';
import { Messages } from '../components/home/Messages';
import { Activity } from '../components/home/Activity';
import { useSelector } from 'react-redux';
import { getUsersSelector } from '../store/selectors';

export const Home = () => {
  const userData = useSelector(getUsersSelector);

  const getDelayCount = (tasks) => {
    return tasks.filter(task => (new Date(task.due_date).getTime() - Date.now()) < 0).length;
  }

  return (
    <div className="home">
      {userData.length !== 0 ?
       <React.Fragment>
        <h1 className="user_greeting">Hello {userData[0].users[0].fname}!</h1>
        <div className="statistics_section">
          <div className="card-container">
            <Card />
          </div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div className="home_boxes_log">
          <div className="card-container">
            <Card title="Tasks" sum={userData[0].users[0].tasks.length} sumDelay={getDelayCount(userData[0].users[0].tasks)}>
              <Tasks userData={userData} />
            </Card>
          </div>
          <div className="card-container">
            <Card title="Messages" sum={userData[0].users[0].messages.length}>
              <Messages userData={userData} />
            </Card>
          </div>
          <div className="card-container">
            <Card title="Activity" sum={userData[0].activities.length}>
              <Activity userData={userData} />
            </Card>
          </div>
        </div>
       </React.Fragment> 
       :
       <LinearProgress style={{width: "100%"}}/>
      }
      
    </div>
  )
}
