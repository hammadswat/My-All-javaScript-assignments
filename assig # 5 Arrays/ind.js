//--------js assignment 05---------- //


 //***  ARRAYS  ***//

//.......................................................................//


//------01 ------//
var studentName =  ['HAMMAD SWATI' , 'ANNAS JATT' , ' NOOR' ,'ALI' , 'NADEEM'];



//------02 ------//
var stringArray =  ["cheeken" , "kabab", "teka","raita","cold drink"];



//------03 ------//
var numArray    =  [0,1,2,3,4,5,6,7,8,9,];



//------04 ------//
var booleanArray=  [true, false,]



//------05 ------//
var mixArray=['swati' , 25, 'swati' ,true , 49, 'swati', false,]




//------06 ------//
var eduQualif=['CSS', 'HCS' , 'BCS','BS','BCOME','MS', 'M.Phil','PhD'];
for(var i = 0;  i < eduQualif.length; i++){
document.write( i + " "+  eduQualif[i] + "<br >" + "<br >"); }




//------07 ------//
var names = ['HAMMAD','SWATI', 'ANNAS', 'NOOR']
var score = [480,320,425,420];
for(var i = 0; i < names.length; i++){
var percentage = (score[i] / 500) * 100
console.log("score of "+ names[i]+" is "+ score[i]+ " and  percantag : " + percentage+"%")
}




//========================08 ===========================//

//------08(a) ------//
var colors = ['red','blue', 'black','green']
var userInput = prompt(" Add the color in the beginning of an array")
console.log(colors.unshift(userInput))


//------08(b) ------//
var colors = ['red','blue', 'black','green']
var userInput = prompt(" Add the color in the end of an array")
colors.push(userInput)
console.log(colors)


//------08(c) ------//
var colors     = ['red','blue', 'black','green']
var userInput1 = prompt(" Add 1st color in the beginning of an array")
var userInput2 = prompt(" Add 2nd color in the beginning of an array")
colors.unshift(userInput1 , userInput2)
console.log(colors)


//------08(d) ------//
var colors = ['red','blue', 'black','green']
colors.shift()
console.log(colors);



//------08(e) ------//
var colors = ['red','blue', 'black','green']
colors.pop()
console.log(colors);



//------08(f) ------//
var colors     = ['red','blue', 'black','green']
var userInput  =  prompt(" Enter name of color to add in an array.")
var Index      = +prompt("At which index you add the color ? ")
colors.splice(Index , 0 , userInput)
console.log(colors)



//------08(g) ------//
var colors    = ['red','blue', 'black','green','Yellow']
var userInput1 = +prompt("Type index you want to delete.");
var userInput2 = +prompt("how many index you want to delete after your type index.");
colors.splice(userInput1 , userInput2)
console.log(colors)



//------09------//
var score = [320 ,230 ,480 ,120]
var sort = score.sort()
document.write("score : " + score + "<br >" + " Sort of score : " +sort + "<br ><br >")



//------10-------//
var cites = ['Karachi', 'Islamabad' , 'Peshawar', 'Quetta', 'Lahor','Multan']
var newArray = []
var salecCites = prompt("")


//------11-------//

var array = ['This ', ' is ', ' my ', ' cat'];
var text = array.join( '')

document.write('Array : '+ array + "<br>" + 'Arry join method /STRING : '+ text + "<br ><br >" )

//------12-------//

var phons = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier',]




//------13-------//




//------14-------//



var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Write the select menu to the document
document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
document.write("<select id='manufacturer'>");

// Loop through the array and create options for the select menu
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");
//===========>***  THE END  ***<===========//

