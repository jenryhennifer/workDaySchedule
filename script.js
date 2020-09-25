/*

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

*/

//producing the time at the top
$(document).ready(function (){
moment().format('YYY-MM-DD')

let todayTime = function(){
    let currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentTime);
}
todayTime();
setInterval(todayTime, 1000);


/*
to get the color to change:
    i need to access the class i want
    
*/







})