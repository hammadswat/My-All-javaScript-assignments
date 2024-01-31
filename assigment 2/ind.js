     //js assignment 02 //

 //** MATH EXPRESSIONS **//

//.......................................................................//



//01 //
var num1 = +prompt(" for additon Enter first number")
var num2 = +prompt("Enter second number")
var result = num1 + num2;
alert("The sum of "+num1+" and "+num2+" is "+ result);




//02 //
//a
var num1 = +prompt("For subtraction Enter first number")
var num2 = +prompt("Enter second number")
var result = num1 - num2;
alert("Rsult  of subtracting "+num1+" from "+num2+" is "+result);

//b
var num1 = +prompt("For multiplication Enter first number")
var num2 = +prompt("Enter second number")
var result = num1 * num2;
alert("Rsult  of multiplying "+ num1 +" and " + num2 + " is "+ result);

//c
var num1 = +prompt("FOR division type first number")
var num2 = +prompt("Type second number")
var result = num1 / num2;
alert("Rsult  of dividing "+ num1 + " by " + num2 + " is " + result);
    
//d
var num1 = +prompt(" for remindr Enter first num:")
var num2 = +prompt("Enter the second num:")
var remainder = num1 %  num2
alert("The remainder of " + num1 + " divided by " + num2+ " is " + remainder);

//==== 03 ===== //

// c: Initialize the variable with some number.
    var myVariable = 3;

// d: Show the initial value of the variable.
    document.write("Initial value: " + myVariable + "<br>");

// e: Increment the variable.
    myVariable++;

// f: Show the value after increment.
    document.write("Value after increment is: " + myVariable + "<br>");

// g: Add 7 to the variable.
    myVariable += 7;

// h: Show the value after addition.
    document.write("Value after addition is: " + myVariable + "<br>");

// i: Decrement the variable.
    myVariable--;

// j: Show the value after decrement.
    document.write("Value after decrement is: " + myVariable + "<br>");

// k: Show the remainder after dividing the variable's value by 3.
    var remainder = myVariable % 3;
    document.write("The remainder is: " + remainder + "<br><br><br>");




// 04 //
var ticketPrice    = +prompt(" Enter the ticket price")
var ticketQuantity = +prompt("Enter quantity of ticket")
var total=(ticketPrice * ticketQuantity)
document.write("Total cost to by " + ticketQuantity + " tickets to a movie is " + total +" PKR. ,<br ><br >");




//05 //
var num = prompt("for any table enter a number");
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

 


//06 //
//a
var celsius    = +prompt("For fahrenhiet Type celsius number ")
var fahrenhiet = (celsius * 9/5 )+32;
document.write(celsius + " C is " + fahrenhiet+ " F <br >");

//b
var fahrenhiet = +prompt("For celsius Type fahrenhie number ")
var celsius    = (fahrenhiet -32)*5/9;
document.write(fahrenhiet + " F is " + celsius + " C  <br ><br >");




//07 //
var priceOfItem1 = +prompt("For shopping enter price of item 1 ")
var priceOfItem2 = +prompt("Enter price of  item 2")
var quantity1    = +prompt("Quantity of item 1")
var quantity2    = +prompt("Quantity of item 2")
var shippinCharges = 900
var totalCost= (priceOfItem1 * quantity1 + priceOfItem2 * quantity2)+900;

document.write("Price of item 1 is " + priceOfItem1 +" <br >")
document.write("Quantity of item 1 is " + quantity1 +" <br >")
document.write("Price of item 2 is " + priceOfItem2 +" <br >")
document.write("Quantity of item 2 is " + quantity2 +" <br ><br>")
document.write("Included shippin Charges is " +shippinCharges +" <br ><br>");

document.write("Totle cost of your order "+ totalCost + " <br ><br >");




//08 //
var totoalMarks  = +prompt("ENTER TOTAL MARKS")
var obtainedMark = + prompt("ENTER obtained Mark")
var parcentage   = (obtainedMark / totoalMarks * 100)
document.write("Total Marks : "+ totoalMarks +" <br >")
document.write("Marks obtained : "+ obtainedMark +" <br >")
document.write(" your percentag is " + parcentage +" <br ><br >");




//09 //
var doller = +prompt("ENTER doller do you have ")
var riyal  = +prompt("ENTER riyal do you have ")
var pakRupee=(doller*296 + riyal*79)
document.write("Total currency in PKR " + pakRupee +"<br ><br >");




//10 //
var num1 = +prompt("ENTER any number")
var num2 = +prompt("Enter number which is multiply by the first num")
document.write("Arithmetic of "+num1 + " and "+ num2+ " is " +(num1 * num2)/2 +"<br ><br >");




//11 //
var currentYear = +prompt("To find age. ENTER current year ")
var birthYear   = +prompt("Enter birth year")

document.write("Current Year : "+ currentYear +" <br >")
document.write("Birth Year : "+ birthYear +" <br >")
document.write("Your age is " +(currentYear - birthYear) +"<br ><br >");




//12 //
var radius = +prompt("TO find area of circle. ENTER the Radius of circle")
var circumfrenece = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of circle : "+ radius +" <br >")
document.write("circumfrenece of circle is "+ circumfrenece +"<br>");
document.write("Area of circle is "+ area +"<br ><br >");




//13 //

//i//
var a = 2
var b = 1
var result = --a - --b + ++b + b--;
document.write("result of --a - --b + ++b + b-- is = "+result +"<br >")

//ii//
var a=2
var b=1
var result = --a
document.write("result of --a is = "+result +"<br >")

//iii//
var a=2
var b=1
var result = --a - --b
alert("result of --a - --b is = "+result +"<br >")

//iv//
var a=2
var b=1
var result = --a - --b + ++b
document.write("result of --a - --b + ++b is = "+result +"<br ><br>")



//14 //

var snack= "Pulao"
var currentAge = 21
var maximumAge = 80
var estimatedAmountPerday = 2
var remaningAge  = maximumAge - currentAge
var lifeTimeSnak = remaningAge
var totalsnake   = remaningAge * 365 * estimatedAmountPerday

document.write("Favorite snack : "+snack +" <br >")
document.write("My currert age is "+ currentAge +"<br >" )
document.write("Mximum age of 21 century is "+ maximumAge +"<br >")
document.write(" I Eat per day plate "+ estimatedAmountPerday +"<br ><br >")
document.write("Hammad you will need "+ totalsnake+ " polao to last you. until the rip of old age is 80 ")


//** THE END **//
