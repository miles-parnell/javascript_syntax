// this is a basic syntax ref
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Variable Basics
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// git repository https://github.com/miles-parnell/javascript_syntax.git


const num = 10;
// ^const makes a varable that can not be changed
let str = 'string';
// ^string: usally text inside of '' or ""
// ^let makes a variable that can be changed
const bool = true;
// ^boolean: true or false
let undef;
// ^Undefined
const nothing = null;
// ^defined no value


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Variable Mutation & Type Coercion 
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

let mutation = 'ten';
// you can change a var to another type as shown
// it does't have to be the same data type
mutation = 'TEN';
mutation = true;
mutation = 10;
mutation = null;

//mutation
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
//coercion

let name = 'John';
let age = 25;

let nameAge = name + ' ' + age;// "John 25", the number changed to a str

let job, isWorking;
// making two vars at the same time, you can give them a value later
job = 'Developer';
isWorking = true;
// ^like this^


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Basic Operators
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

// operators are just basic javascript functions with a simple syntax
// {math} +  -  *  /  % are a few

5 + 5 = 10;

10 - 5 = 5;

5 * 5 = 25;

25 / 5 = 5;

// the "%" operator, or modulo is like division with a remainder
4 % 2 = 0;
5 % 2 = 1;

// you can also use vars

let num1 = 10;
let num2 = 5;
let sumOfNums = num1 + num2;// num1 + num2 = 15


//* Logical Operators *
// {logical} <  >   <=  >= are a few

num1 = 10;
num2 = 5;

let isNum1Greater = num1 > num2;// isNum1Greater = true

// * TypeOf Operator *
// this operator returns the data type of the data its givin

typeof num // number
typeof str // string
typeof bool // boolean
typeof undef // undefined
typeof nothing // null

// here are some single agruement operators

let num = 2;

num++ //num = 3

num-- //num = 1

num += 2 //num = 4

num -= 2 //num = 0

num *= 2 //num = 4

// equality operators
// ==  ===  !=  !==

let isEqual = 10;

isEqual == '10';//true
// double equal uses type coercion

isEqual === '10';//false
// tripple equal checks for type and value

isEqual !== 10;//false

isEqual !== 100;//true


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Operator Precedence
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// the order in which operations are executed (oop for operators lol)
// MDN docs --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let year = 2020;
let birthYear = 1998;
let adultAge = 18;

let isAdult = year - birthYear >= adultAge;
//without vars (2020 - 1998) = 22, 22 > 18
// here is another one

let data1 = 38;
let data2 = 27;

let average = (data1 + data2) / 2;
// without vars 38 + 27 = 65, 65 / 2 = 32.5

// Multuple Assignments of variables

let x, y;

x = y = (10 - 5) * 10;
//x has the value of y and y has the value of the equation

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// If/Else statements
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

num1 = 10, num2 = 5, isTrue;

// returns a boolean value from the expression in parentheses
// if(true) -->{do this} otherwise-->{do this};

if (num1 < num2) {
    isTrue = true;
} else {
    isTrue = false;
};

// * else if *

let myNumber = 69;
let yourNumber = 32;
let result;

if (myNumber === yourNumber) {
    result = 'our numbers are the same';
} else if (myNumber > yourNumber) {
    result = 'my number is bigger!';
} else {
    result = 'your number is bigger :(';
}

//think of "else if" as: if false, try this condidion
//you can have as many "else if" statments after the first if
/*
if (condition) {
    do this;

}if not, try(other condition){
    do this;

}otherwise{
    do this;
};
*/

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
//Boolean Logic
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

age = 16;


if (age < 13) {
    result = 'you are a child';
} else if (age >= 13 && age < 20) {
    result = 'you are a teenager';
} else {
    result = 'you are an adult';
};

/*
think of "&&" as AND, "||" as OR, and "!" NOT.
"&&" means all sides of the expression have to be true for it to return true.
"||" means only one side of the expression has to be true for it to return true.
"!" inverts true/false value

true && false = false
true || false = true
!true = false, !(1 > 2) = true

*/

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
//Ternary Operator & Switch Statments
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

let age = 21;

let drink = (age >= 21) ? 'beer' : 'juice';//drink='beer'
//this is for short if/else statments
//think of it like this, (conditon) ifTrue --> 'beer', ifFalse --> 'juice'

// * switch statments *
//MDN link -->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

num = 3;

switch (num) {
    case 1:
        newNum = 'one';
        break;
    case 2:
        newNum = 'two';
        break;
    default:
        newNum = 'num is not 1 or 2';
}

//this is like a if/else if/else statement
//"break" means if the case is true, don't run the rest of the code.
//if the case is false, it will look at the next case and repeat.
//"default" is the code that runs if none of the conditions are true

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
//Truthy & Falsy
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*


// Falsy values: undefined, null, 0, '', NaN, et cetra...

//Truthy values: anything not falsy

let isTruthy;
// truthy
isTruthy === false;
isTruthy = "False";
isTruthy = 0.001;

// falsy
isTruthy = 0;
isTruthy = false;
isTruthy !== isTruthy;

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Functions()
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// function Name(parameters){code exe when called};
// you can use any var name for the params, but it is conventional to be desriptive with the names
// the params are like temporary variables used inside of the functions
// the return keyword tells the function what data to send out of the function when it is finished
// check out a seperate file that has other examples of functions --> ./js_functions.js



currentYear = 2020;

function findAge(param) {
    return currentYear - param;
};


let birthYear = 1998;

let age = findAge(birthYear); // age = 22

birthYear = 2010;

age = findAge(birthYear); // age = 10


function yearsUntilSixty(yearBorn, name) {
    let age = findAge(yearBorn);
    if (age < 60) {
        return 'My name is ' + name + ' and I trun 60 in ' + 60 - age + ' years.'
    };
};

let sixty = yearsUntilSixty(1990, 'John');
// sixty = "My name is John and I turn 60 in 30 years"


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Function Statements & Expressions
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

// a function expression is a function assigned to a variable

// Declaration
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
};

// Expression
const fullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};


/*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
** What is the deference between a statement and an expression?
**
** Any code that can be evaluated to a value is an expression
**--------------------------------------------------------------------------------
** A statement is an instruction to preform a specific action i.e.
** --> let num;  function action(x,y){do something};
**
**===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*/

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Arrays
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// an array is a collection of data defined by "[]" and separated by commas
// arrays have an index for each item starting at 0 for the first index going left to right
// you can have multipule data types in the same array


let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let anotherArray = [10, 'hello', true, [1, 2, 3]];

numbersArray[0];//will return "1"

numbersArray[6];//will return "7"

//you can also use negitive indices, they work in the oppsite direction.
//if you use -1 as an index it will return the last item in the array as shown. 

numbersArray[-1];//this returns "10"

numbersArray[-3];//returns "8"


//if you have a nested array you can access the indices like this

anotherArray[-1][2];//returns "3" from the nested array


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// array data mutation

fakeArray[5] = 'new item';
// this will take the string and assign it to the 5th index 
// it will override any value in the target index


//if you want to appened a new value to the end of an array..

fakeArray[fakeArray.length] = 'the end';

//this adds the string to the end no matter how long the Arr is


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Array Methods
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

let people = ['John', 'Susan', 'Michael', 'Carol'];

//arr.length
people.length;//will return "4"


//arr.push(newItem)
people.push('Jennifer');//will add the argument to the end of the arr


//arr.unshift(newItem)
people.unshift('Chris');//this adds to the beginning of the arr


//arr.pop()
people.pop();//removes "Carol" from the end of the list


//arr.shift()
people.shift();//removes "John" from the beginning of the list


//arr.indexOf(thisItem)
people.indexOf('Michael');//will return "2" 
//if the arg is not found in the array, it will return -1 as the index


//arr.splice(start, deleteCount)
people.splice(1, 1);//['John', 'Michael', 'Carol'] removed 'Susan'
//this method will remove the "deleteCount" num of items starting at the "start" index


//arr.slice(start, end)
let newPeople = people.slice(1, 3);//[Susan', 'Michael',]
//slice() does not modify the original list, it will return a copy
//"start" is the index where you want to start the copy
//"end" is the index where the copy stops (does not include)


//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// Objects & Properties
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*




