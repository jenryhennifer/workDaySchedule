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

//variables to represent hours in the say
const nineAM = moment('9:00','HH:mm');
const tenAM = moment('10:00','HH:mm');
const elevenAM = moment('11:00','HH:mm');
const twelvePM = moment('12:00','HH:mm');
const onePM = moment('13:00','HH:mm');
const twoPM = moment('14:00','HH:mm');
const threePM = moment('15:00', 'HH:mm');
const fourPM = moment('16:00', 'HH:mm');
const fivePM = moment('17:00','HH:mm'); 
const sixPM = moment('18:00','HH:mm');
const newDay = moment('00:00','HH:mm');

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
to set the local storage:
    i need to take in an input
    when button is clicked, an event listner (.on('click,function())) will save it to local storage
    use the set local storage

    to be able to open it when the page is refreshed
    use the get local storage
*/


// $('#nineSubmit').on('click',function(){
//     localStorage.setItem('nine', $('#taskInput').val());
// })


/*
to get the color to change:
    i need to access the class i want
    i need to give it 3 if statments
    eg: 10 AM
        if time < 10 am -- color is green
        if time is between 10:00 and 10:59 -- color is red
        else color is gray
*/


//formatting for the colors to change when the time changes
//9 AM
$('#nineSubmit').on('click',function(){
    localStorage.setItem('nine', $('#taskInput').val());
})
    if (moment() > nineAM){
        $('.nine').addClass('past')
    }
    else if(moment().isBetween(nineAM,tenAM)){
        $('.nine').addClass('present')
    }
    else if(moment() < tenAM){
        $('.nine').addClass('future')
    }
  
//10 AM
$('#tenSubmit').on('click',function(){
    localStorage.setItem('ten', $('#tenInput').val());
})
    if (moment() > tenAM){
        $('.ten').addClass('past')
    }
    else if(moment().isBetween(tenAM,elevenAM)){
        $('.ten').addClass('present')
    }
    else if(moment() < elevenAM){
        $('.ten').addClass('future')
    }

//11
$('#elevenSubmit').on('click',function(){
    localStorage.setItem('eleven', $('#elevenInput').val());
})
    if (moment() > elevenAM){
        $('.eleven').addClass('past')
    }
    else if(moment().isBetween(elevenAM,twelvePM)){
        $('.eleven').addClass('present')
    }
    else if(moment() < twelvePM){
        $('.eleven').addClass('future')
    }

//12
$('#twelveSubmit').on('click',function(){
    localStorage.setItem('twelve', $('#twelveInput').val());
})
    if (moment() > twelvePM){
        $('.twelve').addClass('past')
    }
    else if(moment().isBetween(twelvePM,onePM)){
        $('.twelve').addClass('present')
    }
    else if(moment() < onePM){
        $('.twelve').addClass('future')
    }

//1
$('#oneSubmit').on('click',function(){
    localStorage.setItem('one', $('#oneInput').val());
})
    if (moment() > onePM){
        $('.one').addClass('past')
    }
    else if(moment().isBetween(onePM,twoPM)){
        $('.one').addClass('present')
    }
    else if(moment() < twoPM){
        $('.one').addClass('future')
    }

//2
$('#twoSubmit').on('click',function(){
    localStorage.setItem('two', $('#twoInput').val());
})
    if (moment() > twoPM){
        $('.two').addClass('past')
    }
    else if(moment().isBetween(twoPM,threePM)){
        $('.two').addClass('present')
    }
    else if(moment() < threePM){
        $('.two').addClass('future')
    }

//3
$('#threeSubmit').on('click',function(){
    localStorage.setItem('three', $('#threeInput').val());
})
    if (moment() > threePM){
        $('.three').addClass('past')
    }
    else if(moment().isBetween(threePM,fourPM)){
        $('.three').addClass('present')
    }
    else if(moment() < fourPM){
        $('.three').addClass('future')
    }

//4
$('#fourSubmit').on('click',function(){
    localStorage.setItem('four', $('#fourInput').val());
})
    if (moment() > fourPM){
        $('.four').addClass('past')
    }
    else if(moment().isBetween(fourPM,fivePM)){
        $('.four').addClass('present')
    }
    else if(moment() < fivePM){
        $('.four').addClass('future')
    }

//5
$('#fiveSubmit').on('click',function(){
    localStorage.setItem('five', $('#fiveInput').val());
})
    if (moment() > fivePM){
        $('.five').addClass('past');
    }
    else if(moment().isBetween(fivePM,sixPM)){
        $('.five').addClass('present');
    }
    else if(moment() < sixPM){
        $('.five').addClass('future');
    }

    if(moment().isSame(newDay)){
        localStorage.clear;
    }



});

