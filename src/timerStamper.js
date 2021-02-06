export const dueDateHandler = (time) => {
  const minutesDifference = (Date.now() - new Date(time).getTime()) / 60000;

  if(minutesDifference < 5){
    return 'Just now';
  } else if (minutesDifference < 60) {
    return `${Math.floor(minutesDifference)} minutes ago`
  } else if (minutesDifference > 60 && minutesDifference < 1440) {
    return `${Math.floor(minutesDifference / 60)} hours ago`
  } else {
    return `${Math.floor(minutesDifference / 1440)} days ago`
  }
}

export const myCustomSort = (a,b) => {
  let date1 = new Date(a['timestamp']);
  let date2 = new Date(b['timestamp']);
  let timeDiffrence = date1.getTime() - date2.getTime();

  if(timeDiffrence < 0)
      return 1;
  else if(timeDiffrence === 0)
      return 0;
  return -1;
}

export const myCustomTasksSort = (a,b) => {
  let date1 = new Date(a['due_date']);
  let date2 = new Date(b['due_date']);
  let timeDiffrence = date1.getTime() - date2.getTime();

  if(timeDiffrence < 0)
      return -1;
  else if(timeDiffrence === 0)
      return 0;
  return 1;
}

export const tasksDueDateHandler = (time) => {
  const minutesDifference = (Date.now() - new Date(time).getTime()) / 60000;
  const todayDate = new Date();
  const todayDays = todayDate.getDate();
  const todaysMonth = todayDate.getMonth();

  if(minutesDifference < 0){
    if(todayDays === new Date(time).getDate() && todaysMonth === new Date(time).getMonth()){
      return ' today' ;
    } else return `${Math.abs(Math.floor(minutesDifference / 1440))} days left`
  } else if (minutesDifference <= 1440 && todayDays === new Date(time).getDate() && todaysMonth === new Date(time).getMonth()) {
    return `today`
  } else {
    return `${Math.floor(minutesDifference / 1440)} days delay`
  }
}