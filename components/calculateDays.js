export default calculateDays = (myDays, timeToDo) => {
  var today = new Date();
  var index = myDays.indexOf(today.getDay())
  var daysGoal = {
    [today.getFullYear()]: {
      [today.getMonth()]: {
        [today.getDate()]: myDays.includes(today.getDay()) ? "today" : "none",
      }
    }
  }

  let i = myDays.includes(today.getDay()) ? timeToDo - 1 : timeTodo;
  today.setDate(today.getDate() + 1);


  while(i > 0){
    if(myDays.includes(today.getDay())){
      if(typeof daysGoal[today.getFullYear()] === 'undefined')
        daysGoal[today.getFullYear()] = {};
      if(typeof daysGoal[today.getFullYear()][today.getMonth()] === 'undefined')
        daysGoal[today.getFullYear()][today.getMonth()] = {};
      daysGoal[today.getFullYear()][today.getMonth()][today.getDate()] = "next";
      i--;
    }
    today.setDate(today.getDate() + 1);
  }

  return daysGoal;
};