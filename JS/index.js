console.log("I am going to rock the Java script man!!!!!");

// declaration of variables
let my_name = "Manu Mathew";
console.log(my_name);

// Rules of declaring variable declaration
// 1. Cannot be a reserved keyword.
// 2. Should be meaningful names.
// 3. Cannot start with a number (1name).
// 4.Cannot contain a space or hyphen(-).
// 5. use camel notation if possible.
// are case sensitive.
// clecking git commit -a

    //modern way to declare variables
let firstName = 'Manu';
let lastName = 'Mathew';
console.log(firstName +" "+lastName);

// modern way to declare constants 
const interestrate = 0.3;
// The line below is commented to remove errors.
// interestrate = 1;
console.log(interestrate);
// if we execute the above code from linenos(22,23,24) we get the error index.js:23 "Uncaught TypeError: Assignment to constant variable. at index.js:23"
// if we need to re-assign a variable  again and again use "let" else use "const"


// primitive datatypes -->String, Number, Boolean, undefined, null
// refernce types ---> 

let name = "Manu";  //String literal
let age = 38;    // Number Literal
let isApproved = true; //Boolean Literal
let mans = undefined;  //undefined datatype
let man = null; //null data type

//Use typeof to find the ""typeof"" to find the data type of variable
console.log(typeof name)
console.log(typeof man)
console.log(typeof mans)
console.log(typeof isApproved)
console.log(typeof age)



