    //js assignment 06//

//*******  FOR LOOPS  *******//

//.......................................................................//




//01 //
var hi="Hellow world"
for(var i = 0; i < 5; i++){ alert(hi) }



//02 //
for (var i = 1; i <= 10; i++){ alert(i) }



//03 //
var num = +prompt("Enter num for multiplication")
var rang = prompt("Enter length")
for(var i = 1; i <= rang; i++){
    console.log(num + " x "+ i + " = " + num * i) 
}



//04 //
var mobile = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei',]
for(var i = 0; i < mobile.length; i++){
console.log(mobile[i])
}



//05//
var quntity= +prompt("Enter num of item ")
for (var i = 1; i <= quntity; i++){
    var item = prompt(" Enter items")
}
 


//06 //
var userInput = prompt("ENTER fruites name")


var fruites  = ['apple ','banana ','maongo','orange','strawberry',] 
for(var i = 0; i < fruites.length; i++){
var index    = fruites.indexOf(userInput)
var show     = fruites.slice(index, 1)
if(userInput === show){
    console.log(userInput + " is avalible at index "+ index + " in our bakery");
}
else{
    console.log(" SORRY . "+ userInput +" is not avalible ")
}

}


//07 //

//a
for(var i =1; i < 16; i++){ console.log(i)
}

//b
for(var i= 10; i >= 1; i-- ){ console.log(i)
}

//c //
for(var i= 0; i <= 10; i++){ console.log(2 * i)
}

//d
for(var i= 0; i <= 9; i++){ console.log(2 * i + 1)
}

//e

for(var i= 1; i < 11; i++){ console.log(2 * i + "k")
}





//08 //
var items = ['apple', 'chips', 'cake', 'patties', 'cookie'];
var userItem = prompt("Well come to swati bakery.what do you want to order sir/ma'am ?");
var found = false;

for( var i = 0; i < items.length; i++){
if(userItem === items[i] ){
        found =true;
        console.log(userItem + " is available at index " + i +" in our bakery"); break;
        
    }
}
if(!found){
    console.log(userItem +" is not available  in our bakery" );}








//09 //
var  num =  [24, 53, 78, 91, 12]
var larg =  0
for(var i = 0; i < num.length; i++){
    
if (num[i] > larg){ larg = num[i]}  }
alert(larg + " is the largest num")





//10 //
var num =  [24, 53, 78, 91, 12]
var small = 91
for(var i = 0; i < num.length; i++){

if (num[i] < small){ small = num[i]}  }
alert(small + " is the smalest num")





//11 //
var num =  [24, 53, 78, 91, 12]
var larg = 0
var small = 91

for(var i = 0; i < num.length; i++){
if (num[i] > larg){ larg = num[i]} }

for(var i = 0; i < num.length; i++){
if (num[i] < small){ small = num[i]} }

console.log(larg + " is the largest num")
console.log(small + " is the smalest num")





//12 //
var num = 5
for(var i = 1 ; i < 21; i++){
    console.log(i * num) }




//13 //
var names = ['HAMMAD','SWATI','ANNAS','NOOR']
var score =[90,89,75,60]
for(var i = 0; i < names.length; i++){
    console.log(names[i]+" - "+ score[i])
}




//14 //
var scores = [12, 45, 3, 22, 34, 50];
var userInput = +prompt("Enter the stop value.")
for(var i = 0; i <= scores.length; i++){ 
    console.log(scores[i])
    if (userInput === scores[i]){ break }
}





//15 // 
 
//Nested element in one line//
var num = [ [1,2,3] , [4,5,6] , [7,8,9] ]
for (var i = 0; i < num.length; i++ ){
     var nested=num[i]

for(var j = 0 ; j < num.length; j++){
        console.log(nested[j]) }
}


//element in one line//
var num = [ [1,2,3] , [4,5,6] , [7,8,9] ]
for (var i = 0; i < num.length; i++ ){
    console.log(num[i])
}







 //16 //

var num = +prompt("Enter number")
for(var i = num ; i >= 0; i-=0.5){
    console.log(i+", " )
}





//17 //
for(var i = 0; i < 21 ; i++){
if(i % 2 == 0){
   console.log(i +"is an even number")
 }
else if(i % 2 !== 0){console.log(i+" is an odd number")}        
 }




//18 //

var num = +prompt("Enter num")
for(var i = 1; i < 8 ; i+=2){
    if(num % 2 !== 0){
        num *=i
        console.log(num) }
}
//19 //

var num =+prompt("Enter num for star")
var star = ""
for(var i = num; i >= 1; i--){

    for (var j = 1; j<=i ; j++){
        console.log("*")
    }
    console.log()
}



//20 //

//a //
var userInput =+prompt("ENTER STARS NUM")
var stars = ""
for (var i = 0; i <  userInput; i++){
    stars += "*****"
  console.log(stars.slice(0,4))
}

//b //
var num = +prompt("Enter num for star")
var stars = ""
for (var i = 0 ; i < num ; i++){
    stars +="*"
    console.log(stars) }


//c //
var stars= prompt("Enter stars")
for(var i = stars.length; i > 0;  i--){
    console.log(stars.slice(0,i))}




    //***** THE END *****/









