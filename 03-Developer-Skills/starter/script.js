// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/



const printForecast = function (temps){
    let forcastMessage = "... ";
    for(let i = 0; i < temps.length; i++){
        forcastMessage += `${temps[i]}oC in ${i+1} days ... `;
    }
    return forcastMessage;
}

let temps = [17, 21, 23];
console.log(printForecast(temps));
temps = [12, 5, -5, 0, 4];
console.log(printForecast(temps));