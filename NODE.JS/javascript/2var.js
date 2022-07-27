//*************************************************** */
// 14/03/22 variable & datatype
//*************************************************** */

//variale is an identifier that can store information
//variale declare using keyword "var" ,"let","const"
// //
// var let = "C Language";
// console.log(let);
// console.log(subject one);
// console.log(let);
// console.log(typeof let);

//string : collection of charater
//using singlequote '' 
//using doublequote " "
//using backtick  `  introduced in es6
//backtick also known as template literal--(IQ)
//backtick also used in paragraph

// ECMA-262, 6th edition, June 2015
// ECMA-262, 7th edition, June 2016
// ECMA-262, 8th edition, June 2017
// ECMA-262, 9th edition, June 2018
// ECMA-262, 10th edition, June 2019
// ECMA-262, 11th edition, June 2020
// ECMA-262, 12th edition, June 2021

// var sub_one = "C Language";
// var sub_two = 'C++';
// var sub_three = "Javascript";

// var course = sub_one + sub_two + sub_three;
// console.log(course) //C LanguageC++Javascript

// var course = sub_one + " " + sub_two + " " + sub_three;
// console.log(course) //C Language C++ Javascript

// var course = sub_one
//     + " " +
//     sub_two 
//     + " " +
//     sub_three;
// console.log(course) //C Language C++ Javascript


// var course = `our courses ${sub_one} then ${sub_two} then ${sub_three}`
// console.log(course) //our courses C Language C++ Javascript


// var course = `our courses
// ${sub_one} 
// then ${sub_two} 
// then ${sub_three}`
// console.log(course) //our courses C Language C++ Javascript


// numbers

// var decimal_num = 100;
// var double_num = 100.12345;
// var hexadecimal_num = 0xFF;
// var octal_num = 0o377;
// var binary_num = 0b11111111;
// console.log(decimal_num, double_num, hexadecimal_num, octal_num, binary_num);


// console.log(typeof "Hello");                  //string
// console.log(typeof 100);                      //number
// console.log(typeof true);                     //boolean
// console.log(typeof undefined);                //undefined
// console.log(typeof null);                     //object
// console.log(typeof []);                       //object
// console.log(typeof function () { });          //function
// console.log(typeof {});                       //object
// console.log(typeof 100n);                     //bigint
// console.log(typeof Symbol("Hello"));          //symbol

// var test = () => { }
// console.log(typeof test)