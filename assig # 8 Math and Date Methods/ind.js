//** MATH METHODS**/

//01 //
var num = +prompt("Enter any number")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
console.log("Number : " + num + "\n" + "Round of value : " + round + "\n"
  + " floor value : " + floor + "\n" + "ceil value : " + ceil)




//02 //
var num = +prompt("Enter any negative number")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
console.log("Number : " + num + "\n" + "Round off value : " + round + "\n"
  + " floor value : " + floor + "\n" + "ceil value : " + ceil)




//03 //
var num = +prompt("Enter any positive floating number")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
console.log("Number : " + num + "\n" + "Round of value : " + round + "\n"
  + " floor value : " + floor + "\n" + "ceil value : " + ceil)




//04 //
var num = +prompt("Enter any negative floating number")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
console.log("Number : " + num + "\n" + "Round of value : " + round + "\n"
  + " floor value : " + floor + "\n" + "ceil value : " + ceil)




//05 //
var num = +prompt("Enter any +ev/-ev number")
var absolute = Math.abs(num)
console.log("The absolute value of " + num + " is : " + absolute)




//06 //
var dice1 = Math.ceil(Math.random(1) * 6)
var dice2 = Math.ceil(Math.random(1) * 6)
console.log("random dice : " + dice1 + "\n" + "random dice : " + dice2)




//07 //
var coin = Math.ceil(Math.random(1) * 2)
if (coin == 1) { console.log('HEADS') }
else if (coin == 2) { console.log("TAILS") }




//08 //
var num = Math.ceil(Math.random(1) * 100)
alert(num)

//09 //


//10 //
var userInput = +prompt("Enter a secret number b/w 1 & 10")
var secretNum = Math.ceil(Math.random(1) * 10)
if (userInput === secretNum) {
  alert("congratulate")
}
else { alert("Incorrect number Try again!") }




//11 //
var date = new Date();
document.write(date)



//12 //
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[date.getMonth()]
document.write("current Month :" + currentMonth)




//13 //

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'sat']
var currentDay = days[date.getDay()]
alert("To day is " + currentDay)



//14 //
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'sat']
var currentDay = days[date.getDay()]

if (currentDay == 'sun' || currentDay == 'sat') {
  console.log("It's fun day")
}

//15 //

var monthDays = new Date()
if (monthDays <= 15) {
  console.log("FIRST fifteen days of the month")
}
else if (monthDays > 15) { console.log(" LAST fifteen days of the month") }

//16 //

// var date   = new Date()
//var year = 365 * 24 * 60 * 60 * 1000
// var years  = Math.round(date.getTime() / year)
// console.log("current date :"+ date)

// console.log("Elapsed milisecond since january 1, 1970: " + year)

//var currentTime = datetime.now()
//# Calculate the number of minutes since midnight, Jan. 1, 1970
// var pastDays = new Date(1970, 1, 1)
// var minutesSinceMidnight = (currentTime - pastDays).total_seconds() / 60



//17 //

var d = new Date();
var hour = d.getHours()

if (hour <= 12) {
  console.log("it AM!")
}
if (hour > 12) {
  console.log("it PM!")
}

//18 //

//19//

var ramadanStartDate = new Date('2015-06-18');
var currentDate = new Date();
// Calculate the time difference in milliseconds
var timeDifference = currentDate - ramadanStartDate;
// Calculate the number of days by dividing milliseconds by milliseconds per day (24 * 60 * 60 * 1000)
var daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
alert("Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassed + "days");





//23 //
var userInput = +prompt("Enter your current age to find your birth day")
var currentYear = +prompt("Enter current year")
var birthDay = currentYear - userInput
alert("Your birth year is : " + birthDay)





//24 //
// electric bill
var cname = prompt("Enter your name")
var units = +prompt("ENTER number of unit")

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[date.getMonth()]

var chargePerUnit = 14
var amountPayable = chargePerUnit * units
var latePayment = 500
var latfee = +(amountPayable + latePayment)

console.log(" K-Electric Bill " + '\n' +
  " Customer Name : " + cname + '\n' +
  " Current month : " + currentMonth + "\n" +
  " Number of units : " + units + "\n" +
  " Charges per unit : " + chargePerUnit + "\n" +
  " Net Amount Payable (within Due Date) : " + amountPayable + "\n" +
  " Late Payment Surcharge : " + latePayment + "\n" +
  " Gross Amount Payable (after Due Date) : " + latfee)





//*** THE END OF JAVA ASSIGNMENT O8  ***//

// 7 ==> 6 , 9 ,13 14, 17 ,19 ,20,


// 8 ==> 9 , 16, 18 ,20 ,21 ,22,

// 9 ==> 11 ,13 ,14 19, 20 ,21,22,23,24




















































































































