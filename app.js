// console.log("Hello World!");
// console.log("Divyansh Here!");
// let a =10;
// let b = 5;
// console.log("Sum is :",a+b);

//Template Literals : used to add embedded expressions in a string

// let pencilPrice = 10;
// let earsersPrice = 5;
// //let output = "The total price is : "+ (pencilPrice + earsersPrice)+ " Rupess";
// //Template Literals
// // ``= backticks are used to write the string in a better way and we can use the variables in the string by using ${variableName}
// let output = `The total price is : ${pencilPrice + earsersPrice} Rupess`;
// console.log(output);

//Aritmetic Operators

// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(++a);

//Comparison Operator

// let age = 19;
// console.log(age==18);

// let num = 5;
// let str = '5';
// console.log(num==str);// Compares value, not type
// console.log(num===str);// Compares type and value
// console.log(0==' ');
// console.log(0===' ');
// console.log(0==false);
// console.log(0===false); // there is a true or false associated with every value
// console.log(null==undefined);
// console.log(null===undefined);

//Comparison for non-numbers = Unicode

// console.log('a'<'A');
// console.log('A'<'B');
// console.log('*'<'&');

//Conditional Statements

//If statement

// let age =23;
// if(age>=18)
// {
//     console.log("You can vote");
//     console.log("You can drive");
//     let a =5;
//     console.log(5*a)
// }
// if(age<18)
// {
//     console.log("You cannot vote.")
// }
// if(age>=20)
// {
//     console.log("You are in your 20's")
// }

// let firstName = "Divyansh";
// if(firstName=="Divyansh")
// {
//     console.log(`Welcome ${firstName}`)
// }

//Traffic light

// let color = "green";

// if(color=="red")
// {
//     console.log("Wait! Light color if Red");
// }
// else if(color=="yellow")
// {
//     console.log("Slow down! Light color is Yellow");
// }
// else if(color=="green")
// {
//     console.log("Go! Light color is Green")
// }
// else
// {
//     console.log("Traffic light is broken");
// }

//Else- if

//Grading System

// let marks = 33;

// if(marks>=90)
// {
//     console.log("A grade");
// }
// else if(marks>=80)
// {
//     console.log("B grade");
// }
// else if(marks>=70)
// {
//     console.log("C grade");
// }
// else if(marks>=33)
// {
//     console.log("D grade");
// }
// else if(marks<33)
// {
//     console.log("You fail! Better luck next time")
// }

//Popcorn Prices 

// let size = "M";
// let price = null;

// if(size=="XL")
// {
//     price = 250;
//     console.log(`You bill amount is ${price} rupees.`);
// }
// else if(size=="L")
// {
//     price = 200;
//     console.log(`Your bill amount is ${price} rupees.`);
// }
// else if(size=="M")
// {
//     price = 100;
//     console.log(`Your bill amount is ${price} rupees.`);
// }
// else if(size=="S")
// {
//     price = 50;
//     console.log(`Your bill amount is ${price} rupees.`);
// }
// else 
// {
//     console.log("You have chosen invalid size.")
// }

//Nested if-else

// let marks = 80;
// if(marks>=33)
// {
//     console.log("Pass!");
//     if(marks>=90)
//     {
//         console.log("Grade: A");
//     }
//     else if(marks>=80)
//     {
//         console.log("Grade: B")
//     }
// }
// else
// {
//     console.log("Better luck next time.")
// }

// Logical Operators

// let marks = 33;

// if(marks>=33 && marks>=80)
// {
//     console.log("Pass!");
//     console.log("Grade: A");
// }
// if((marks>=33) || marks>=70)
// {
//     console.log("Pass!");
//     console.log("Grade: B");
// }

// console.log(!(5<3)) // not  reverse the final answer

//Combining multiple logical operators

// let marks = 32;
// if((marks>33 && marks<=80) || !false)
// {
//     console.log("Pass!");
// }

// Practice Questions

//q1

// let str = "ample";
// if((str[0]==="a"||str[0]=="A")&& str.length>3)
// {
//     console.log("Good String.");
// }
// else
// {
//     console.log("Not a good string.");
// }

//q2

// let num = 12;
// if((num%3===0)&&((num+1===15)||(num-1===11)))
// {
//     console.log("Safe");
// }
// else
// {
//     console.log("Unsafe");
// }

//Truthy and falsy

// if(null)
// {
//     console.log("It has true value.")
// }
// else
// {
//     console.log("It has false value");
// }

// let str = "";
// if(str)
// {
//     console.log("String is not empty.")
// }
// else
// {
//     console.log("String is empty.");
// }

// let num = 0;
// if(num)
// {
//     console.log("Number is not equal to zero.")
// }
// else
// {
//     console.log("Number is equal to zero.");
// }    

// Switch Statement

// let color = "green";

// switch(color)
// {
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow" :
//         console.log("Slow down"); 
//         break;   
//     case "green" :
//         console.log("Go"); 
//         break;       
//     default:
//         console.log("Broken Light")    
// }

// Question 

// let day = 4;

// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;            
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Inavlid day.");    
// }

// Alerts and Prompts

// alert : it pops up when we refresh the page
//alert("This is a simple alert!");

// different messages

// console.error("This is an error message.");

// console.warn("This is a warn message.");

//Prompts : Inputs in js

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let name1 = firstName + " " + lastName;
// let str = "Welcome "+ name1 + " !";
// alert(str);


//Practice

//q1

// let num = prompt("Enter a number:");
// if(num%10===0)
// {
//     alert("good");
// }
// else
// {
//     alert("bad");
// }

//q2

// let name1 = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name1} is ${age} years old.`);

//q3

// let quarter = 4;

// switch(quarter)
// {
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Invalid quarter.");    
// }

//q4

// let str = "apples";
// if((str[0]=="a"||str[0]=="A") && str.length>5)
// {
//     console.log("Golden String");
// }
// else
// {
//     console.log("Not a golden string.");
// }

//q5

// let a = 20;
// let b = 19;
// let c = 18;

// if(a>b)
// {
//     if(a>c)
//     {
//         console.log(`${a} is largest.`);
//     }
//     else
//     {
//         console.log(`${c} is largest.`);
//     }
// }
// else
// {
//     if(b>c)
//     {
//         console.log(`${b} is largest.`);
//     }
//     else
//     {
//         console.log(`${c} is largest`);
//     }
// }


//bonus


// Conflicted Solution
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");
// if(num1[num1.length-1]==num2[num2.length-1])
// {
//     console.log(num1[num1.length-1]);
//     console.log(num2[num2.length-1]);
//     console.log("Same");
// }
// else
// {
//     console.log(num1[num1.length-1]);
//     console.log(num2[num2.length-1]);
//     console.log("Not same");
// }


//Solution

// let num1 = 100;
// let  num2 = 20030;

// if((num1%10)==(num2%10))
// {
//     console.log("Numbers have the same last digit which is:",num1%10);
// }
// else
// {
//     console.log("Numbers don't have the same last digit.");
// }

//String Methods

//1.trim method

// let msg = "  hello  ";
// console.log(msg.trim());

// let password = prompt("Set your password:");
// let newPass = password.trim();
// console.log(password);
// console.log(newPass);

//Strings are immutable in js

// let msg = "      divyansh   ";
// let str = msg.trim();
// console.log(str);
// console.log(msg); // No change in original string

// let name1 = "Divyansh";

// //2. toUpperCase method
// console.log(name1.toUpperCase());

// //3. toLowerCase method
// console.log(name1.toLowerCase());

// 4. indexOf method

// let str = "ILoveCoding";
// console.log(str.indexOf("Love")); // returns the index of the first occurence of the substring
// console.log(str.indexOf("Coding"));
// console.log(str.indexOf("o",4)); // returns the index of the substring after the given index

// Method chaining

// let msg = "    hello     ";

// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);

//It can be done in one line with method chaining

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

//5.slice method

// let msg = "Divyansh Gupta";
// console.log(msg.slice(5,8));
// console.log(msg.slice(5)); // if we give only one argument then it will slice from the given index to the end of the string

// //pasing negative index
// console.log(msg.slice(-1)); // it will slice from the end of the string

//6.replace method

// let msg = "I Love Coding";

// console.log(msg.replace("Love","like")); // replaces the first occurence of the substring
// console.log(msg.replace("o","x")); // replaces the first occurence of the character

//7.repeat method

// let fruit = "Mango";
// console.log(fruit.repeat(5)); // it will repeat the string 5 times

//Quetions

//q1
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

//q3

let str = "ApnaCollege";

let newStr = str.slice(str.indexOf("College")).replace("l","t").replace("l","t");
console.log(newStr);






















