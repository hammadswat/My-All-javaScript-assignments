    //js assignment 07//

//*******  STRING METHODS  *******//

//.......................................................................//



  

//01 //
var firstName = prompt("Enter first name ")
var lastNmae = prompt("Enter last name")
var fullName = firstName + lastNmae
alert("Hellow " + fullName)





//02 //
var phoneModel =prompt("Type your favorite mobile phone model.")
var length =phoneModel.length
alert(phoneModel + "\n" + " length of string is = " + length)





//03 //
var word = 'pakistan'
var index = prompt("type the one word of pakistan to find its index")
alert("string : pakistan "+"\n" 
+" index of " + index + " in the word pakistan is : " +word.indexOf(index)) 





//04 //
var indWord = prompt("Type the one of string hellow woeld and see it index")
var word = "Hellow world"   
var lastIndex = word.lastIndexOf(indWord)
alert("string : Hellow woeld "+ " \n" +"Last index of : "+ indWord+ " is "+ lastIndex)





//05 //
var word = "Pakistan"
var indNum = prompt("ENTER the any index number of word pakistan ")
var index = word.charAt(indNum)
alert(" is "+ index)




//06 //
// Take user inputs for first and last name
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

// Merge the names using the concat method
var fullName = firstName.concat(" ", lastName);

// Greet the user using the full name
alert("Hello, " + fullName + "! Welcome!");





//07 //
var city =" i live in Hyderabad"
for (var i = 0; i < city.length; i++){
     var extract = city.slice(i, i + 5)

if(extract === 'Hyder'){city = city.slice(0, i)+ 'Islam' + city.slice(i + 5) }
}
document.write(city)





//08 //
var message = "Ali and Sami are best friends. They play cricket and football together"
for(var i= 0; i<message.length; i++){
    var word =message.slice(i, i + 3)
if(word === 'and'){message = message.slice(0 ,i) + '$' + message.slice(i + 3)}
}
console.log(message)




//09 //

var num = +prompt("type any num that convert into string")
alert("The type of "+ num +" is "+typeof(num))




//10 //

var userInput = prompt("Enter URL")
for(var i = 4; i <userInput.length; i++){
    console.log(userInput.slice(i)); break;
}





//11 //
var userInput =prompt('Type any tex in small later')
alert(userInput = userInput[0].toUpperCase() + userInput.slice(1))





//12 //
var text = prompt('type any text in capital')
document.write(text.toLowerCase())





//13 //






//14 //
var num = 35.36;
// Convert the number to a string
var numAsString = num.toString();
// Remove the dot from the string
var resultString = numAsString.replace('.', '');
// Display the result in the browser
console.log("Original Number: " + num + "<br>");
console.log("Converted String: " + resultString);


// var num = prompt("")
// for (var i = 0; i < num.length; i++){
//     var dote = num.slice(i ,i + 1)
// if (dote === "."){
//         num = num.slice(0, i)+ num.slice(i+1)
//     }
//     console.log(num)
// }




//15 //
var num1 = +prompt('enter num 1')
var num2 = +prompt('enter num 2')
console.log("x = a + b "+ " \n " +"x = "+ (num1 + num2) )





//16 //
var num1 = +prompt('enter num 1')
var num2 = +prompt('enter num 2')
console.log("x = a - b "+ " \n " +"x = "+ (num1 - num2) )





//17 //

// var userInput = prompt("Enter your name ")
// for (var i = 0; i < userInput.length; i++){
//         charCode = userInput.charCodeAt(i)
//         if(charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64)
//         alert("not a valied name ") ;
    
//     else{alert(userInput + " is valed name " ); break}

// }






//18 //
var userInput = prompt("Find food items")
userInput= userInput.toLowerCase()

var items =['cake', 'apple pie', 'cooki', 'chips', 'patties']
var index = items.indexOf(userInput)
var show = items.splice(index, 1)
if(userInput == show){
   console.log(userInput + " is present in our bakery at index  " + index+" in our bakery");
}
else{
    console.log(userInput +" is not avalible ");
}


//19 //
var userInp1 = prompt("enter text")
var userInp2 = prompt("enter text")

if(userInp1 > userInp2){
    console.log(userInp1 +" is greater then "+ userInp2)
}
else{
    console.log(userInp2 +" is greater then "+ userInp1)
}


//20 //




//21//
var string = "University of Karachi";
for(var i = 0; i < string.length; i++){
    console.log(string[i]+ "\n")
}




//22 //

var userInput = prompt("Type any text")
var lastWord = userInput.slice(-1);
console.log(lastWord)




//23 //

var string = "the quick brown fox jumps over the lazy dog";
var count = 0
for (var i = 0; i < string.length; i++) {
    var find = string.slice(i, i+3)
    if(find === "the"){
        count++ }
        
}
console.log(' the number of occurrences of word “the” is :'+ count);





//24 //
var str = prompt("type any text to find num of vowls")
str = str.toLowerCase()
var vCount = 0
var consCount = 0
for(var i = 0; i < str.length; i++){
    if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
        vCount++
    }
    else{consCount++}

}
console.log("The num of vowls in string is : "+vCount)
console.log("The num of constant in string is : "+consCount)




//*** THE END OF JAVA ASSIGNMENT O7  ***//


