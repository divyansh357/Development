//Js-2

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


//Js-3
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

// let str = "ApnaCollege";

// let newStr = str.slice(str.indexOf("College")).replace("l","t").replace("l","t");
// console.log(newStr);

//Array DS

// let students = ["Divyansh","Rahul","Rohit","Rajat"];
// console.log(students);

// console.log(typeof students);

//mixed array
//let arr = ["Divyansh",20,true,5.5];
// console.log(arr);
// console.log(arr.length);

// let newArr = [];
// console.log(newArr);
// console.log(newArr.length);

// console.log([0,1].length);

//Accessing elements of an array

// console.log(arr[0][0]);
// console.log(arr[0].length);

//Arrays are mutable

// let fruits = ["Apple","Banana","Mango"];
// fruits[0] = "Pineapple";
// console.log(fruits);
// fruits[10] = "Orange"; // it will create empty slots in the array
// console.log(fruits);
// console.log(fruits[5]);

//Array Methods

//1. push method : it adds the element at the end of the array
// let cars = ["BMW","Audi","Mercedes","Toyota"];
// console.log(cars.push("Ford")); // adds the element at the end of the array
// console.log(cars);

//2. pop method : it removes the last element of the array
// console.log(cars.pop()); // removes the last element of the array
// console.log(cars);

//3. unshift method : it adds the element at the start of the array
// console.log(cars.unshift("Ford")); // adds the first element of the array
// console.log(cars);

//4. shift method : it removes the first element of the array
// console.log(cars.shift()); // removes the first element of the array
// console.log(cars);

// //example

// let followers = ["Divyansh","Rahul","Rohit","Rajat"];

// let blocked = followers.shift();

// console.log(followers);
// console.log(blocked);    

//question

// let months = ["january","july","march","august"];
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);

//5.indexOf method : it returns the index of the element

// let colors = ["red","blue","green"];
// console.log(colors.indexOf("blue")); // returns the index of the element
// console.log(colors.indexOf("yellow")); // returns -1 if the element is not present in the array
// console.log(colors.indexOf("Green"));


// //6. includes method : it returns true or false
// console.log(colors.includes("blue")); // returns true if the element is present in the array
// console.log(colors.includes("yellow")); // returns false if the element is not present in the array

// //7. concat method : it returns the new array
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1);// no change in the original array

// //8. reverse method : it og reverses the array
// console.log(arr3.reverse());
// console.log(arr3); // original array is also reversed

// 9. slice method : it returns the copy of the array

// let cars = ["BMW","Audi","Mercedes","Toyota"];

// console.log(cars.slice()); // it will return the copy of the array
// console.log(cars.slice(1)); // it will return the array from the given index to the end of the array  
// console.log(cars.slice(1,3)); // it will return the array from the given start index to the end index-1
// console.log(cars.slice(cars.length-1)); // it will return the last element of the array
// console.log(cars.slice(5));  // it will return an empty array
// console.log(cars.slice(-2)); // it will return the last two elements of the array
// console.log(cars.slice(-5)); 

//10. splice method : makes changes in the original array

// let colors = ["red","yellow","blue","orange","pink","white"];

// console.log(colors.splice(4)); // it will remove the elements from the given index to the end of the array
// console.log(colors);
// console.log(colors.splice(1,2)); // it will remove the elements from the given start to count of elements
// console.log(colors);
// colors.push("blue");
// colors.push("pink");
// console.log(colors);
// colors.splice((1,2));
// console.log(colors);
// colors.splice(0,0,"green","purple");
// console.log(colors);
// colors.splice(1,0,"black"); // adds the element at the given index
// console.log(colors);
// colors.splice(1,1,"blue"); // replaces the element at the given index
// console.log(colors);

//10. sort method : it sorts the array

// let cars = ["BMW","Audi","Mercedes","Toyota"];
// console.log(cars.sort());
 
// let chars = ['q','a','m','b'];
// console.log(chars.sort());

// //But it doesn't work for numbers as it converts the numbers into strings and then sorts them 

// let nums = [10,5,20,15];
// console.log(nums.sort());

//Questions

//q1 

// let months = ["january","july","march","august"];
// months.splice(0,2,"july","june");
// console.log(months);

//q2

// let tech = ['c',"c++","html","javascript","python","java","c#","sql"];
// console.log(tech.reverse().indexOf("javascript"));

//Array References: arrays are compared by reference not by value

//This condition will always return 'false' since JavaScript compares objects by reference, not value
// console.log([1]===[1]); // false
// console.log([]===[]);  // false

// let arr = ['a','b'];
// let arrCopy = arr; // it will copy the reference of the array
// console.log(arrCopy);
// arrCopy.push('c');
// console.log(arr);
// console.log(arrCopy);

// console.log(arr===arrCopy); // true

// let arr1 = ['a','b','c'];
// console.log(arr1===arr); // both are different as references are different although the elements are same
// arr1.pop();
// console.log(arr);

// Constant Arrays

// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr = [4,5,6]; // it will give an error : Assignment to constant variable

// Nested Arrays

// let arr = [[1,2],[3,4],[5,6]];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0].length);
// console.log(arr.length);
// console.log(arr[1][1]);

//Questions

// let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(game);
// game[0][1] = 'O';

//Sheet

//q1

// let arr = [7,9,0,-2];
// let n = prompt("Enter the number:");
// console.log(arr.slice(0,n));

//q2

// let arr = [7,9,0,-2];
// let n = prompt("Enter the number:");
// console.log(arr.slice(-n));

//q3

// let str = " "; 
// if(str.length==0)
// {
//     console.log("Empty");
// }
// else
// {
//     console.log("Not Empty");
// }

//q4

// let str = "ApNaCoLlEgE";
// let idx = 3;
// if(str[idx]==str[idx].toLowerCase())
// {
//     console.log("Character is lowercase");
// }
// else
// {
//     console.log("Character is uppercase");
// }

//q5

// let str = prompt("Enter a string:");
// let newStr = str.trim();
// console.log(newStr);

//q6
// let arr = ["hello",'a',23,64,99,-6];
// let item = 64;
// if(arr.includes(item))
// {
//     console.log("Element present in the array.");
// }
// else
// {
//     console.log("Element not present in the array.");
// }

//  Js-4
//Loops

//1. for loop

// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }

// for(let i=10;i>=1;i=i-3)
// {
//     console.log(i);
// }

//Odd numbers from 1 to 15
// for(let i=1;i<=15;i+=2)
// {
//     console.log(i);
// }

// for(let i=15;i>=1;i-=2)
// {
//     console.log(i);
// }

// Even numbers from 2 to 10

// for(let i=2;i<=10;i+=2)
// {
//     console.log(i);
// }    

// for(let i=10;i>=2;i-=2)
// {
//     console.log(i);
// }

// Infinite loop

// for(let i=1; ; i++)
// {
//     console.log(i);
// }

// Multiplication table

// for(let i=5;i<=50;i+=5)
// {
//     console.log(i);
// }

// let num = prompt("Enter a number:");
// num = parseInt(num); // converting integer to number 
// for(let i=num;i<=num*10;i+=num)
// {
//     console.log(i);
// }

// Nested for loop

// for(let i=1;i<=3;i++)
// {
//     console.log(`Outer loop:${i}`);
//     for(let j=1;j<=3;j++)
//     {
//         console.log(j);
//     }
// }

// 2. while loop

// let i =1;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }

// // backwards

// let j = 5;
// while(j>=1)
// {
//     console.log(j);
//     j--;
// }

// let k=0;
// while(k<=20)
// {
//     console.log(k);
//     k+=2;
// }

// Favorite Movie

// const movie = "The Dark Knight";
// let guess = prompt("Guess my favorite movie:");

// while((guess!="The Dark Knight")&&(guess!="quit"))
// {
//     guess = prompt("Wrong guess. Please try again:");
// }

// if(guess=="The Dark Knight")
// {
//     console.log("You guessed it right!");
// }
// else
// {
//     console.log("You quit the game.");
// }

//break keyword

// let i =1;
// while(i<=5)
// {
    
//     if(i==3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// Customize favorite movie with break

// const favMovie = "Avengers";
// let guess = prompt("Guess my favorite movie:");
// while(guess!="Avengers")
// {
//     if(guess=="quit")
//         {
//             console.log("You quit the game.");
//             break;
//         }
//     guess = prompt("Wrong guess. Please try again or you can quit by typing quit:");
// }
// if(guess=="Avengers")
// {
//     console.log("You guessed it right!");
// }

// Loops with arrays

// let fruits = ["Apple","Banana","Mango","Pineapple","Orange"];
// fruits.push("Grapes");
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(i,fruits[i]);
// }

// for(let i = fruits.length-1;i>=0;i--)
// {
//     console.log(i,fruits[i]);
// }

// Loops with nested arrays

// let heros = [["ironman","spiderman","thor"],
//                 ["superman","wonder woman","flash"]];
// for(let i=0;i<heros.length;i++)
// {
//     console.log(i,heros[i]);
//     for(let j=0;j<heros[i].length;j++)
//     {
//         console.log(`j=${j} ${heros[i][j]}`);
//     }
// }

// let student = [["Divyansh",20,],["Rahul",21],["Rohit",22]];
// for(let i=0;i<student.length;i++)
// {
//     console.log("Info of student:",i+1);
//     for(let j=0;j<student[i].length;j++)
//     {
//         console.log(student[i][j]);
//     }
// }

// for of loop

// let fruits = ["Apple","Banana","Mango","Pineapple","Orange"];
// for(let fruit of fruits)
// {
//     console.log(fruit);
// }

// for(char of "apna college")
// {
//     console.log(char);
// }

// Nested for of loop

let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(list of heroes)
{
    console.log(list);
    for(hero of list)
    {
        console.log(hero);
    }
}
