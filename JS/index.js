console.log("I am going to rock the Java script man!!!!!");

// ---------------------------declaration of variables
let my_name = "Manu Mathew";
console.log(my_name);

//----------------------------- Rules of declaring variable declaration
// 1. Cannot be a reserved keyword.
// 2. Should be meaningful names.
// 3. Cannot start with a number (1name).
// 4.Cannot contain a space or hyphen(-).
// 5. use camel notation if possible.
// are case sensitive.
// clecking git commit -a

    //------------------------------modern way to declare variables
let firstName = 'Manu';
let lastName = 'Mathew';
console.log(firstName +" "+lastName);

//-------------------------------------modern way to declare constants 
const interestrate = 0.3;
// The line below is commented to remove errors.
// interestrate = 1;
console.log(interestrate);
// if we execute the above code from linenos(22,23,24) we get the error index.js:23 "Uncaught TypeError: Assignment to constant variable. at index.js:23"
// if we need to re-assign a variable  again and again use "let" else use "const"


//------------------------------------- primitive datatypes -->String, Number, Boolean, undefined, null
// refernce types ---> 

let name = "Manu";  //String literal
let age = 38;    // Number Literal
let isApproved = true; //Boolean Literal
let mans = undefined;  //undefined datatype
let man = null; //null data type

//----------------------------------Use typeof to find the ""typeof"" to find the data type of variable
console.log(typeof name)
console.log(typeof man)
console.log(typeof mans)
console.log(typeof isApproved)
console.log(typeof age)

//--------------------------------- refernce types ---> Object, array, function

//What is object - think of a person. A person has name, address, age.These are the
//properties of person.

let person = {
    personName:"Manu",
    personAge:23

};
console.log(person)
console.log(person.personName)
console.log(person.personAge)

//if we need to change the name of the person we can use dot operator for that
person.personName = "Augustine";
console.log(person.personName);

//if we need to change the name of the person we can use bracket operator for that
person["personName"] = "codeninjas";
console.log(person.personName);

//or using a third variable "selection" also we can do the following
let selection = "personName";
person[selection] = "codeninjas";
console.log(person.personName);


//----------------------------------------------------ARAYS

let selectedColors = ["red", "blue"];
console.log(typeof selectedColors)
console.log(selectedColors);

//Display the first color stored on the array selected colors 
//arrays in js is dynamic and immutable
//difference between arrays of different languages and JS are --> arrays in all other languages we can store data of one datatype and but in js we can store datatypes of different types.
 console.log(selectedColors[0]);
 selectedColors[2] = 1.9;
 console.log(selectedColors);
 console.log(selectedColors.length);

 //-------------------------------------------------FUNCTIONS
//  declaration of fuction

function greet(pname) {   // parameter is "pname" to the function greet
    console.log("Hello " + pname + "!!");
}

//function call
greet("Mathew K A");
greet("Elsamma Mathew");
greet("Manu Mathew"); // argument is "Manu Mathew" to the function greet.
greet("Alina Mathew");

// multiple prameter function

function greet(pname, lname) {   
    console.log("Hello " + pname + " " + lname + "!!");
}

//function call
greet("Merin", "Sara Thomas");

// --------------------------TYPES OF FUNCTION
//a FUNCTION IS A SET OF STATEMENTS WHICH ARE USED TO PERFORM A SPECIFIC TASK.

function square(num){
    return num*num;
}

console.log(square(2));


// ----------------------------------------------Strings

const message = "My name is Manu Mathew";

//String methods
console.log(message.length);
console.log(message[3]);
console.log(message.includes('my'));
console.log(message.includes('Manu'));
console.log(message.startsWith("My"));
console.log(message.endsWith('w'));
console.log(message.indexOf("Manu"));
console.log(message.replace("My","His"));
console.log(message.toUpperCase());
console.log(message.trim()); // removes whitespace in the starting and ending of the string.
console.log(message.trimLeft()); //removes whitespaces on left side

const newMessage = "This is my new \"new message\" ";   //escape notation for single quote
console.log(newMessage)
console.log(newMessage.split(' '));


//-----------------------------------------if and else
//----syntax
//if (condition) {
//     statement
// }
// else if (condition){
//     statement
// }
// else if (condition){
//     statement
// }
// else
//     statement


//Note:--  we use document.write to display in the web page
let hour = 10;
if (hour>=6 && hour<12){
    document.write("Good Morning");
}

else if(hour>=12 && hour<18){
    document.write("Good Afternoon");
}
else
    document.write("Good night");

//-----------------------------SWITCH STATEMENT

document.write("\n");
let day =1;
switch(day){
    //Switch case in Js accepts strings, numbers and boolean values 
    case 1:
        document.write("<h1>Sunday</h1>\n");
        break;

    case 2:
        document.write("Monday\n");
        break;

    case 3:
        document.write("Tuesday\n");
        break;

    case 4:
        document.write("Wednesday\n");
        break;
    
    case 5:
        console.log("Thursday\n");
        break;

    case 6:
        document.write("Friday\n");
        break;
    
    case 6:
        document.write("Saturday\n");
        break;
    
    default:
        document.write("Please enter correct input\n");
}
//another example of switch
let sirName = "Mathew";
switch("Manu"+" "+sirName){
    case "Manu Mathew":
        document.write("<h2>This is my name.</h2>");
        break;

    default:
        document.write("Wrong Input");

}

// -----------------------------------------------------------------LOOPS
/* for loop
    While
    Do While
    For in
    For of

syntax for for loop--> for(initialization; condition; updation(increment/decrement))
*/

for(let i=0; i<5; i++){
    // document.write(i);
    // document.write("<br><br>");
    // console.log("Hello World "+i);
    if(i%2!=0){
        document.write("Hello World "+i);
        document.write("<br><br>");

    }


}

//break statement
document.write("break statement");
document.write("<br>")
for(let i=0; i<5; i++)
{
    if(i==2){
        break;
    }
    else{
        document.write("Loop"+"-"+i+" ");
        document.write("<br><br>")

    }
    
}

document.write("continue statement");
document.write("<br>")
    
//continue statement
for(let i=0; i<5; i++)
{
    if(i==2){
        continue;
    }
    else{
        document.write("Loop"+"-"+i+" ");
        document.write("<br><br>")

    }
    
}

//using loops in array
document.write("using loops in arrays");
document.write("<br>")
const frndNames = ['john','bob','mary','joe'];
for(let i=0; i<frndNames.length ; i++){
    document.write(frndNames[i]);
        document.write("<br><br>")

}

//or using for of loop
for(name of frndNames){   // use "in" in place of "of" to print the index 
    console.log(name);
}

const user = {
    first : "John",
    last : "Jacob"

}
console.log(typeof user);
for (key in user){
    console.log(user[key]);
}

//while loop
let i = 0;
while(i< 10){
    i++;
    if(i==4){
        console.log("exit out of the loop");
        break;

    } 
    else{
        console.log(i);
        
    }
 
    //if(i==4) break;
}


// Do - while loop
let c = 10;
do{
    c++;
    if(c==13) break;
    else console.log(c);

}while(c<15);

// for each loop
// It is always advisable to use for each loop for arrays
const petAnimals = ['cat', 'dog', 'horse', 'sheep', 'bird'];

petAnimals.forEach(animal =>{
    console.log(animal);
})








