    //js assignment 03 //

//** USER	INPUT	&	CONDITIONAL	STATEMENTS **//

//.......................................................................//



//01 //
var userInput = prompt("Enter your name")
alert("Hi "+userInput);




//02 //
var num = +prompt("Enter a number and get its table")
if (num === "") {num = 5}

document.write(num+ " x 1 = "+ num * 1 +"\n  <br >"
+num+ " x 2 = "+ num * 2 +"\n  <br > "
+num+ " x 3 = "+ num * 3 +"\n  <br >"
+num+ " x 4 = "+ num * 4 +"\n  <br >"
+num+ " x 5 = "+ num * 5 +"\n  <br >"
+num+ " x 6 = "+ num * 6 +"\n  <br >"
+num+ " x 7 = "+ num * 7 +"\n  <br >"
+num+ " x 8 = "+ num * 8 +"\n  <br >"
+num+ " x 9 = "+ num * 9 +"\n  <br >"
+num+ " x 10 = "+ num * 10 +"<br > <br >");





//03 //
var cityname = prompt("Enter city name")
if(cityname === "karachi") {alert("Well Come to the city of light ")}
else {alert ("well come to " + cityname)}





//04 //
var gender = prompt("ENTER your gender")
if(gender === "male") {alert("Good Morning Sir")}
else if (gender === "femal") {alert("Good Morning Ma'am ")}
else {alert("Error! please rither write 'male' or 'female' ")}





//05 //
var signalColor = prompt("ENTER color of trafic signals")
if (signalColor == "red"){alert("vehicles must stop")}
else if (signalColor =="yellow"){alert("vehicles should get ready to move")}
else if (signalColor =="green"){alert("vehicles can move now")}
else alert(signalColor+ " is not a colcor of trafic signal. ")





//06 //
var maxage = +prompt("Enter your max age ")
var currentAge = +prompt("Enter your age")
if(currentAge <=maxage) {alert("Your well come")}
else if(currentAge > 30) {alert("Sorry your age is above from our requird age")}





//07 //
var fuel = +prompt("Enter how many litre fulel do you have:")
if(fuel < 0.25) {alert("“Please refill the fuel in your car” ")}
else{alert("please enter fuel do you have")}





//08 //

//a
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}

//b
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}

//3
var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}

//e
if (true){
    alert("True");
  }
  if (false){
    alert("False");
  }

//f
if("car" < "cat"){
    alert("car is smaller than cat");
  }

  
  




//09 //
var totalmarks       = +prompt("Enter the total marks")
var subOneObtMarks   = +prompt("Enter obtained marks of 1st subject")
var subTwoObtMarks   = +prompt("Enter obtained marks of 2nd subject")
var subThreeObtMarks = +prompt("Enter obtained marks of 3rd subject")
var obtainedMarks = (subOneObtMarks + subTwoObtMarks + subThreeObtMarks)
var percentage=( obtainedMarks / totalmarks)*100

if (percentage >= 80)
{document.write("TOTAL MARKS = "+ totalmarks +"<br>"+"Marks Obtained = " +obtainedMarks +"<br>" +"Percentag = "+percentage +"<br >" +"Grade = A+ ") }

else if (percentage >= 70)
{document.write("TOTAL MARKS = "+ totalmarks +"<br>" +"Marks Obtained = " +obtainedMarks +"<br>" +"Percentag = "+percentage +"<br >" +"Grade = A ")}

else if (percentage >= 60)
{document.write("TOTAL MARKS = "+ totalmarks +"<br>" +"Marks Obtained = " +obtainedMarks +"<br>" +"Percentag = "+percentage +"<br >" +"Grade = B "+"<br>" + "REMARKS : you need to improve") }

else if (percentage < 60 )
{document.write("TOTAL MARKS = "+ totalmarks +"<br >" +"Marks Obtained = " +obtainedMarks +"<br >" +"Percentag = "+percentage +"<br >" + "Grade = Your are Fail" +"<br >" + "REMARKS : you need to improve")}







//10 //
var nameItem1       =prompt("Type the name of item 1")
var priceItem1      =+prompt("Enter price of item 1")
var quantityOfItem1 =+prompt("Enter quantity of item 1") 
var price1 = priceItem1 * quantityOfItem1;

var nameItem2       =prompt("Type the name of item 2")
var priceItem2      =+prompt("Enter price of item 2")
var quantityOfItem2 =+prompt("Enter quantity of item 2")
var shipCahrges     =+prompt("Enter shipping charges")
var price2 = priceItem2 * quantityOfItem2;

var totalCost     = price1 + price2 +shipCahrges
var discount      =(totalCost * 0.1)
var discountprice =(totalCost-discount)

if(totalCost > 2000){document.write("Price of " + nameItem1 + " is = " + priceItem1 + "<br>" 
+"Quantity of " + nameItem1 + " is = " + quantityOfItem1+ "<br>" 
+"Price of " + nameItem2 + " is = " + priceItem2 + "<br>" 
+"Quantity of " + nameItem2 + " is = " + quantityOfItem2 +"<br> " 
+"shipping Charges = "+shipCahrges+"<br> "
+"Total cost of your order is "+totalCost+" PKR "+"<br>"
+"we are giving you 10% discount. your total cost with discount is " + discountprice)}

else{document.write("Price of " + nameItem1 +" is = "+ priceItem1 + "<br>" 
+"Quantity of "+ nameItem1 + " is = " + quantityOfItem1+"<br>" 
+"Price of "+nameItem2+" is = "+price2 +"<br>"
+"Quantity of "+nameItem2+" is = "+quantityOfItem2 +"<br> "
+"shipping Charges = "+shipCahrges+"<br>"
+"Total cost of your order is "+totalCost+" PKR ")}





//11 //
var userInput = +prompt("Type asecret number")
var secretNum = 9
if(userInput === secretNum){alert("Bingo! corret answer")}
else if(userInput === 8){alert("“Close enough to the correct answer”.")}
else if(userInput === 10){alert("“Close enough to the correct answer”.")}
else{alert("Rong Answer")}





//12 //
var num = +prompt("Enter a number to check divisibility by 3 ?")
if(num % 3 == 0){alert(num +" is divisible by 3")}
else{alert("Invalid input. Please enter a valid integer.")}






//13 //
var scoreA = +prompt("Enter team A score")
var scoreB = +prompt("Enter team B score")
if(scoreA > scoreB){alert("Team A won the match")}
else if(scoreA == scoreB){alert("The match has been tied")}
else if (scoreA < scoreB){alert("Team B won the match")}
else{alert("please enter team score's")}






//14 //
var string =  prompt("")
var number = +prompt("")
var boolean= prompt("")






//15 //
var userInput = +prompt("Enter a number to cheek it even or odd")
if(userInput % 2 == 0){alert(userInput + " is an even number")}
else if(userInput % 3 == 0)
{alert(userInput+" is an odd number")}






//16 //
var tempratuer = +prompt("Enter a celciuse to cheek weather ")
if (tempratuer > 40){alert("Its to hot outside")}
else if (tempratuer > 30){alert("Today weather is normale")}
else if (tempratuer > 20){alert("Today weather is cool")}
else if (tempratuer > 10){alert(" “OMG! Today weather is so Cool.")}





//17 //
var num1 = +prompt("Enter the first num")
var num2 = +prompt("Enter the second num")
var operater=prompt("Enter the operater .EXp: + , - , x , / ,%")

if (operater === "+"){alert(num1 + num2)}
else if (operater === "-"){alert(num1 - num2)}
else if (operater === "x"){alert(num1 * num2)}
else if (operater === "/"){alert(num1 / num2)}
else if (operater === "%"){alert(num1 % num2)}
else{alert("please enter the value with operater")}






//18 //
var day = prompt("Enter current day name")

if(day =="monday"){alert("“It's a week day” ")}
else if(day == "saturday")  {alert("“It's weekend”")}
else if(day == "sunday")    {alert("“Yay! It's a holiday”")}
else if(day == "tuesday")   {alert("“It's a week day” ")}
else if(day == "wednesday") {alert("“It's a week day” ")}
else if(day == "thursday")  {alert("“It's a week day” ")}
else if(day == "friday")    {alert("“It's a week day” ")}
else {alert("please enter the  day name")}





//19 //
var score = +prompt("Enter score ")
if(score > 50){alert("“You are passed”")}
else if(score < 50){alert("“Try again!”")}
else{alert("please enter number of score")}





//20 //
var num1 = +prompt("Enter the first number")
var num2 = +prompt("Enter second number")

if (num1 > num2)     {alert(num1+" is greater then "+num2)}
else if(num1 < num2) {alert(num1+" is less then "+num2)}
else if(num1 = num2) {alert("Both are equal")}
else {alert("please enter number")}





//21 //
var languge = prompt("Enter any one languge ouy of this 3.arabic ,urdu ,english")
if (languge === "english"){alert("Hello, World")}
else if(languge === "arabic"){alert("مرحبا بالعالم")}
else if(languge === "urdu"){alert("ہیلو دنیا")}
else{alert("please enter languge")}





//22 //
var num = +prompt("Enter any number")
if (num > 0){alert(num+" is positive number")}
else if(num < 0){alert(num+" is negative number")}
else{alert(" please enter the number")}





//23 //
var num    = +prompt("enter number")
var known  = prompt("Type any known")
var concat = num +" "+ known
alert(concat)


    //** THE END **//