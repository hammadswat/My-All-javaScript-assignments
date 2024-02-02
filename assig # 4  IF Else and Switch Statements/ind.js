     //js assignment 04 //

 //** IF…ELSE	&	ELSE…IF	  STATEMENTS,  TESTING	SET  OF  CONDITIONS  &  SWITCH	STATEMENTS **//

//.......................................................................//



//-----01------ //
var num = +prompt("To cheek num which is divisible by 3 or not. ")
if (num % 3 == 0 ){alert(num +" is divisible by 3. ")}
else {alert(num + " is not divided by 3")}



//-----02------ //
var num = +prompt("To cheek number which is even or odd")
if (num % 2 == 0 ){alert(num + " is an evnen number ")}
else if (num % 3 == 0){alert(num + " is an odd number ")}
else{alert("please enter number")}




//-----03------ //
var age = +prompt("Enter your age")
if (age > 18 ){alert("Old enough")}
else if(age < 18 && age > 0 ){alert("To young")}
else{alert("Please enter age with positve num")}



//-----04------ //
var userInput  = prompt("Enter name")
var secretName = 'Hammad Swati'
if(userInput === secretName){alert("you are most wellcome")}
else{alert("")}




//-----05------ //
var num = +prompt("To cheek num its divisible by 3 or not ")

switch(num % 3 ){
    case 0: alert(num +" is dvivisible by 3"); break;
    default:alert(num +" is not dvivisible by 3") 
}




//-----06------ //
var userInput = prompt("Type any text or number")
var code = userInput.charCodeAt()
if (code >= 97 && code <= 122 ){alert("you have typed small letter")}
else if (code >= 65 && code <= 90 ){alert("you have typed capital letter")}
else if (code >= 48 && code <= 57 ){alert("you have typed a number")}
else{alert('please typ num or text')}




//-----07------ //
var num1 = +prompt('Enter number')
var num2 = +prompt('Enter second number')
var operater = prompt('Enter operater like +, -, X, /, %,')

switch(operater){
    case "+": alert(num1 + num2); break;
    case "-": alert(num1 - num2); break;
    case "x": alert(num1 * num2); break;
    case "*": alert(num1 * num2); break;
    case "/": alert(num1 / num2); break;
    case "%": alert(num1 % num2); break;
    default:alert("please enter num and operater")
}



//-----08------ //
var time = +prompt('Enter the current time')
if(time >= '0000' && time < 1200 ){alert('Good morning')}
else if(time >= 1200 && time < 1700 ){alert('Good after noon')}
else if(time >= 1700 && time < 2100 ){alert('Good evening')}
else if(time >= 2100 && time < 2359 ){alert('Good night')}
else{alert('please enter the current time')}




//-----09------ //
var currentYear = +prompt("Enter the year to cheek its leap or not")
var leapYear    = currentYear % 4 == 0;
if( currentYear = leapYear){alert('This is a leap yera')}
else{alert("This is not a leap year")}



//-----10------ //
var userInput = +prompt('Enter your password')
var password  = 123456789
var nothing   = ''  
if(userInput == password){alert('Correct! The password you entered matches the original password')}
else if(userInput == nothing){alert("please enter password")}
else{alert('Incorrect password')}




//-----11----- //
var firstName = "Ali";
if (firstName === "Fahad") {document.write("Hello Fahad!");
} 
else {document.write("You are not Fahad" + " <br >");
}




//-----12------ //
var hour = 13;
var greeting1 = "Good day"
var greeting2 = "Good evening"
if(hour < 18){alert(greeting1)
}
else {alert(greeting2)}


// var hour = +prompt("Enter hour")
// var greeting="Good day"

// if(hour > 0 && hour < 18 ){alert(greeting)}
// else if(hour > 18 && hour <= 24){alert(' Good evening')}
// else{alert('please enter hour')}




//-----13------ //
var num1 = +prompt("Enter first num ")
var num2 = +prompt("Enter second num ")
if(num1 > num2){alert("The first integer is larger")}
else if (num1 < num2){alert("The second integer is larger")}
else if (num1 === num2){alert("Both integers are equal")}
else{alert("Please Enter number")}






//-----14------ //
var num = +prompt("Enter num to cheek its possitve or negative")
if(num > 0){alert("this is possitve num")}
else if(num < 0){alert("this is negative num")}
else if (num == 0){alert("this number is zero")}
else{alert('pleas enter the number')}





//-----15------ //
var hour = +prompt("Please enter the current hour (in 24-hour format):")
if (hour >= 6 && hour <9){alert("Breakfast is served.")}
else  if (hour >= 11 && hour <13){alert("Time for lunch.")}
else  if (hour >= 17 && hour <20){alert("It's dinner time.")}
else{alert("Sorry, you'll have to wait, or go get a snack.")}





//-----16------ //
var varType = "Hammad"
alert(varType + " \n"+ "Type of variabel is : "+ typeof varType)

var varType = 123
alert(varType + " \n"+ "Type of variabel is : "+ typeof varType)

var varType = true
alert(varType + " \n"+ "Type of variabel is : "+ typeof varType)

// var userInput = "swati"
// if (userInput==="string"){alert(typeof userInput)}
// else if (userInput===  Number ){alert(typeof userInput)}
// else if (userInput === true || userInput === false ){alert(typeof userInput)}




//-----17------ //
var vowel = prompt("type alphabit");
vowel.toLowerCase()
if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
 return true;
} else {
   return false;
}




//-----18------ //
var result = 10 !== 8;
console.log(result);
// This will output: true




//-----19------ //
var month = +prompt("Enter the month in number to get its name.");

switch (month) {
    case 1: alert(month + " is the month of january."  )
        break;

        case 2: alert(month + " is the month of Febeuary." )
        break;


        case 3 : alert(month + " is the month of March." )
        break;


        case 4: alert(month + " is the month of April.")
        break;


        case 5: alert(month + " is the month of May." )
        break;


        case 6: alert(month + " is the month of June.")
        break;


        case 7: alert(month + " is the month of July.")
        break;


        case 8: alert(month + " is the month of August.")
        break;


        case 9: alert(month + " is the month of September." )
        break;

        case 10: alert(month + " is the month of October")
        break;


        case 11: alert(month + " is the month of November.")
        break;


        case 12: alert(month + " is the month of December.")
        break;


    default:
        alert(" There is only 12 month .so select the num b/n 1 and 12")
        break;
}

//-----20------ //

var age = +prompt("Type age for vote")
if(age > 0 && age < 18){
    alert("toy young")
}
else if(age > 18){
    alert("old enough")
}




//---------***  THE END  ***----------//

















