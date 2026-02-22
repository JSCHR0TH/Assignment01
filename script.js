/* 
App: First Java Script Application (Assignment01)
AUthor: Jana Schroth
Date: 02/16/2026
*/


/*
Exercises

Convert the following highlighted identifiers to Camel Case notation:

let some_month
function the Month()
let current-month
let summer_month
let MyLibrary-function

Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
Give me two examples of complex / variable expressions.
Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
Create a variable.
Add a number and a string and display the coerced result in the browser’s console window.
Create two variables.
For the first variable, add a Boolean and a string and display the coerced result.
For the second variable, add a number and a Boolean and display the coerced result.
Is the following string literal valid? If not, how would you fix it?

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
console.log(someString)

Create a variable that produces a null value in the console window.
Then, create a variable that produces an undefined value in the console window.
Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

Hello Zak Ruvalcaba, welcome to the JavaScript class!

Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
Declare a variable called name and set it equal to your name.
Substitute your name in the previous alert string with the variable instead.
Declare a variable called course and set it equal to “JavaScript”.
Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

Hello Zak Ruvalcaba.
Welcome to the JavaScript class!

Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
Declare a variable called x and assign it a value of 10.
Declare a variable called y and assign it a value of 20.
Display the sum of those two numbers in the console window.
Declare a variable called x and assign it a value of 20.
Add and assign 20 to that variable and display the result in the console window.
The result should be 40.
Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window.
The result should be 100.
Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
Divide and assign 1 to that variable and display the result in the console window.
The result should be 2. If you got 6.66 try again.
Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
*/

//ANSWERS

//STEP1
/*
let someMonth
function theMonth()
let currentMonth
let myLibraryFunction
*/

//STEP2
/*
32 //(numeric)
'This is a string literal'
true //(boolean)
null
*/

//STEP3
/*
let travelDestination = 'Hawaii'
let devisionRemainder = 933%2
console.log (devisionRemainder)
*/

//STEP4
/*
let firstName
let lastName
let address
let city
let state
let zipCode
let yourAge
let referralSource
let blnPermToContact
*/

//STEP5
/*
let firstName 
firstName = prompt ('What is your first name?')

let blnPermToContact = false

let firstName = 'John', blnPermToContact = false
*/

//STEP6
/*
let result = 5 + ' minutes'
console.log (result)
*/

//STEP7
/*
let firstVar = 'Is it Friday today?: ' + false
console.log (firstVar)

let secondVar = 5 + true
console.log (secondVarVar)
*/

//STEP8
//add a string escape after "I"
/*
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)
*/

//STEP9
/*
let nullResult = null
console.log (nullResult)
let undefinedResult
console.log (undefinedResult)
*/

//STEP10
/*
let message = 'This is a string literal'
console.log (typeof message)
let age = 32
console.log (typeof age)
let answer = true
console.log (typeof answer)
let fullName = {firstName:'Jana', lastName:'Schroth'}
console.log(typeof fullName)
let x
console.log(typeof x)
*/

//STEP11
/*
alert ('Hello ' + 'Jana Schroth' + ', welcome to the JavaScript class!')
*/

//STEP12
/*
let Name = 'Jana Schroth'
alert ('Hello ' + Name + ', welcome to the JavaScript class!')
*/

//STEP13
/*
let Name = 'Jana Schroth'
let course = 'JavaScript'
alert ('Hello ' + Name + `Welcome to the ${course} class!`)
*/

//STEP14
/*
let Name = 'Jana Schroth'
let course = 'JavaScript'
alert ('Hello ' + Name + `\nWelcome to the ${course} class!`)
*/

//STEP15
/*
let Name = prompt ('Enter your first and last name:')
let course = 'JavaScript'
alert ('Hello ' + Name + `\nWelcome to the ${course} class!`)
*/

//STEP16
/*
let Name = prompt ('Enter your first and last name:')
let course = prompt ('Enter the course name:')
alert ('Hello ' + Name + `\nWelcome to the ${course} class!`)
*/

//STEP17
/*
let x = 10
let y = 20
let sum = x + y
console.log(sum)
*/

//STEP18
/*
let x = 20
x = x + 20
console.log(x)
*/

//STEP19
/*
let x = 20
x = x * 5
console.log(x)
*/

//STEP20
/*
let x = 20 % 3
x = x / 1
console.log(x)
*/

//STEP21
/*
let miles = 300
let gallons = 20
let MPG = miles / gallons
let result = MPG <= 25
alert (`Your car get less that 25 MPG on a full tank of gas : ${result}`)
*/

//STEP22
/*
let heightPerson1 = 75
let heightPerson2 = 45
let result = heightPerson1 == heightPerson2
alert (`Both individuals have the same height: ${result}`)
*/


//extra
/*
let namePerson1 = prompt ('Enter name for person 1:')
let heightPerson1 = prompt ('Enter height in inch for person 1:')
let namePerson2 = prompt ('Enter name for person 2:')
let heightPerson2 = prompt ('Enter height in inch for person 2:')
let result = heightPerson1 > heightPerson2
alert (`${namePerson1} is taller than ${namePerson2}: ${result}`)
*/
