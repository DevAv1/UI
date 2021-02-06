import React from 'react';
import '../styles/card.css';

export const Card = ( props ) => {
  return (
    <div className="card">
      <div className="card_header">
        <div>{props.title}</div>
        <div className="box-numbers">
          <div className="tasks_circle messages_sum">{props.sum}</div>
          {props.title !== "Activity" && props.title !== "Messages" && <div className="tasks_circle messages_delay_sum">{props.sumDelay}</div>}
        </div>
      </div>
      <div className="card-body">
       {props.children}
      </div>
    </div>
  )
}
