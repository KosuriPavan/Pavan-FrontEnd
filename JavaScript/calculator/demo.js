// let char = '';
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         char = char+j;
//     }
//     console.log(char);
//     char='';
// }

// function myFunction(num1,num2){ 
//     let num3=num1*num2;
//     return num3;
// }

// mulVal=myFunction(10,20);
// console.log(mulVal); //200  

//----------------------------------------------------
//Default Parameters

// function multiply(num1, num2 = 1){
//     return num1 * num2;
// }
// const result1 = multiply(5, 5);
// console.log("Result 1: ", result1); 

// const result2 = multiply(5);
// console.log("Result 2: ", result2); 

// const result3 = multiply(5, undefined);
// console.log("Result 3: ", result3); 

// //Destructured Parameters - Array
// const names = ["Andrew", "James", "Chris"];
// function showDetails([arg1, arg2]){
//     console.log("Arg1: ", arg1);
//     console.log("Arg2: ", arg2);
// }
// showDetails(names);

// //Destructured Parameters - Object
// const empObj = {name : "Mark", age : 25, country : "India"}
// function showEmpDetails({name, country}){
//     console.log("Name: ", name);
//     console.log("Country: ", country);
// }

// showEmpDetails(empObj);
// console.log(eval('2 + 4'));
// console.log(parseInt("123a"+"45"))
// console.log(isNaN(2));
// console.log(10+"sdk"+20);
// myFun=function doSomething(a){
//     console.log(a*a);
// }
// myFun(10);
// let a =2;
// function f(){
//     a=50;
//     console.log(a);
// }
// f();
// console.log(a);

// function doSomething(name){
// 	console.log(10+"SKD" +12);
// }
// result=doSomething(10);
// console.log(result);   //line 5

// let list_of_marks = [12,18,25,24,2,5,18,20,20,21];

// function moreThanAverage(inputArray){
//     let sum=0;
//     let count=0.0;
//     for(let i=0;i<inputArray.length;i++){
//         sum += inputArray[i];
//     }
//     let avg= sum/inputArray.length;
//     inputArray.forEach(element => {
//         if(element>=avg){
//             count++;
//         }
//     });
//     return (count/inputArray.length * 100);
// }

// console.log("more than average: "+(moreThanAverage(list_of_marks))+".0");

// function frequency(inputArray){
//     let count=0;
//     let resultArray=[];
//     for(let k=0;k<=25;k++){
//         inputArray.forEach(element => {
//             if(k===element){
//                 count++
//             }
//         });
//         resultArray.push(count);
//         count=0;
//     }
//     return resultArray;
// }
// console.log("frequency: "+(frequency(list_of_marks)));

// let arr = [12,18,25,24,2,5,18,20,20,21];
// arr.pop();
// arr.push(90);
// arr.unshift(90);
// console.log(arr);

// let myArray = ["Android", "iOS", "Windows"];

// console.log(myArray.join(" _ ")); 

// let arr11=[9,1,2,2,6,8];
// let result = arr11.reduce((a,b)=>Math.max(a,b),-Infinity);
// let result1 = arr11.reduce((a,b)=>Math.max(a,b));
// console.log(result);
// console.log(result1);

// console.log(typeof(null));

// let n =24;
// let l=0,r=100,ans=n;
// while(l<=r){
//     let mid = Math.floor((l+r)/2);
//     if(mid*mid<=n){
//         ans=mid;
//         l=mid+1;
//     }
//     else {
//         r=mid-1;
//     }
// }
// print(ans);
// -------------------------------------------
// let num=10;
// const increaseNumber=()=>num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);
// -------------------------------------------
// function compareMembers(person1, person2 = person){
//     if (person1 !== person2){
//         console.log('not the same');
//     }
//     else {
//         console.log('same');
//     }
// }

// const person = {name:'Lydia'};
// compareMembers(person)
// ---------------------------------------------
// function test(a,b,c){
//     console.log(a+b*c);
// }
// test(2,3);
// ---------------------------------------------
// function a(){
//     console.log("inside a");

//     function b(){
//     console.log("inside b");
//     }
// }
// a();
// ----------------------------------------------
// var a= "A";
// console.log(65-a);
// ----------------------------------------------
// console.log(1+'1');
// ---------------------------------------------
// console.log(1-'1');
// ---------------------------------------------
// console.log(a+"b");
// ---------------------------------------------
// let a = "hello";
// console.log(a=(a+"c"));
// ---------------------------------------------
// let a=[1,2,2];
// let b=a;
// console.log(a==b);//true
// console.log(a===b);//true
// ---------------------------------------------
// let a=[1,2,2];
// let b=[1,2,2];
// console.log(a==b);//false
// console.log(a===b);//false
// ---------------------------------------------
// let a=[1,2,2];
// let b=a;
// a[1]=3;
// console.log(a);//[1,3,2]
// console.log(b);//is also updated [1,3,2] and vice versa even though b has changed innner values
//----------------------------------------------
// let a=[1,2,2];
// let b=a;
// a=[9,8,7];
// console.log(a);//[9,8,7]
// console.log(b);//[1,2,2]
// ----------------------------------------------
// let a=[1,2,2];
// let b=a.slice();//doesn't make a copy referrence address unless creates the copy in new address 
// //or another way
// let a=[1,2,3];
// let b=[...a];//if you place a in [] it appears as => [[1,2,2]], so if added three dots before =>[1,2,2]
// console.log(a==b);//false
// console.log(a===b);//false cause in both cases there are not having same address
//----------------------------------------------
// function callme(a,b,c){
//     console.log(a, b, c);
// }
// callme(1,2,2);//=>output = 1 2 2
// let x = [1,2,2];
// console.log(x);//=>output = [1,2,2] undefined undefines -- since x value goes only to a variable
// console.log(...x)//=>output = 1 2 2
// -------------------------------------------
// the same goes for objects also
// let user ={a:1,b:2,c:2};
// let copy = user;//copy hold copy of the location where user is present and hence copy==user,copy===user yeilds true
// let copy={...user}//hold the data and stored in different location hence copy==user or copy===user yeilds false
// --------------------------------------------
// let xyz={a:1,b:2,c:3};
// console.log(xyz["a"]);//=>1
// -------------------------------------------
// let names = ['potti', 'swathi', 'bondam','bujjiNanna'];
// let names2 = ['potti', 'swathi', 'bondam','bujjiNanna'];
// console.log("slice method");
// console.log(names);
// console.log(names.slice(1,3));//slice method pop outs the data but doent effect the actual array and here second parameter is number 
// console.log(names);
// console.log("--------------------------------------------------");
// console.log('splice method');
// console.log(names);
// console.log(names.splice(1,3));//splice method pop outs the data and stores in same and here second parameter is index
// console.log(names);
// ---------------------------------------------
// let names = ['potti', 'swathi', 'bondam','bujjiNanna'];
// names.forEach((n)=>{
//     console.log(n);
// })
// -------------------------------------------------
// let names = [1,2,3,4,5];
// names.forEach((n)=>{
//     console.log(n);
// })
// let doubled = names.map((n)=>n*2);
// console.log(doubled);

// let arr=[4,2,2,1]
// arr.forEach((a,b,c)=>{
//     console.log(a,b,c);
// })
// -----------------------------------------------
// let arr=["11","12","13","14"];
// //convert above strings to numerical
// let ans = arr.map((n)=>{
//     return Number(n);
// })
// console.log(ans);
// ---------------------------------------------

// let arr=[9,1,2,2,6,8];
// let result = arr.filter((e)=>{
//     return (e===2);
// })

// console.log(result);
// --------------------------------------------
// let arr=[9,1,2,2,6,8];
// let result = arr.reduce((a,b)=>Math.max(a,b),-Infinity);
// let result1 = arr.reduce((a,b)=>Math.max(a,b));
// console.log(result);
// console.log(result1);
// let result2= arr.reduce((a,b)=>a+b);
// console.log(result2);
// console.log(arr.sort().reverse());
// let result3= arr.sort((a,b)=>a-b);
// console.log(result3);
// let result4= arr.sort((a,b)=>b-a);
// console.log(result4);
// -------------------------------------------
// sort in decreasing order by age
// let users=[
//     {name:"chwathi",age:22},
//     {name:"aravind",age:23},
//     {name:"vamsi",age:25},
//     {name:"bharat",age:24}
// ]
// console.log(users);
// let result=users.slice();
// result.sort((a,b)=>b.age-a.age);
// console.log(result);
// let result2=result.map((a)=>({age:a.age}))
// console.log(result2);
// ----------------------------------------
// sort strings
// let users =["chwathi","aravind","vamsi","bharat"];
// users.sort();
// console.log(users);
// -----------------------------------------
// const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
// // console.log(sampleObject.red);

// function hasKey(key) {
//     //   write your code here
//     if (sampleObject[key]) {
//         return true;
//     }
//     return false;
// }

// // hasKey("black");

// // Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
// ----------------------------------------
// let str = "3,4,5,6";
// //converting str to an array of characters
// let fragments = str.split(",");//=>['3','4','5','6']
// //converting chars to numbers
// let arr=fragments.map((element) => {
//     return element=Number(element);
// });
// console.log(arr);
// //we can also write
// let fragments1=str.split(",").map(element=>Number(element));
// console.log(fragments1);
// -----------------------------------------
// let str='$aHAb3';
// console.log(str.charCodeAt(5));//gives ASCII value
// console.log(String.fromCharCode(65));//reverse - char of ASCII value
// -----------------------------------------
// let a=20;
// function callme(){
//     let a =30;
//     function f(){
//         console.log(a*2);
//     }
//     return f;//f is returned
// }
// let result = callme();//here callme return {console.log(a*2)}
// result();// which is function and then result becomes a function and when called it returns ans
// -----------------------------------------
// or we can also write
// let a=20;
// function callme(){
//     let a =30;
//     function f(){
//         console.log(a*2);
//     }
//     return f();//f is called and returned
// }
// callme();//it is same as above code but here in line 239 we have returned the result of f function
// ---------------------------------------------

// let bandNames = ['The Rolling Stones', 'An Aerosmith', 'A Led Zeppelin', 'Pink Floyd', 'The Who'];

// let wihtoutArticles = [];
// let map = {};
// for (let i = 0; i < bandNames.length; i++) {
//     let str = bandNames[i];
//     str = str.replace(/\ban\b|\ba\b|\bthe\b/gi, '');
//     str = str.replace(/ +/gi, ' ').trim();
//     map[str] = bandNames[i];
//     wihtoutArticles.push(str);
// }
// console.log(map);
// console.log(bandNames);
// console.log(wihtoutArticles.sort());
// let finalResult = [];
// for (let i = 0; i < wihtoutArticles.length; i++) {

//     finalResult.push(map[wihtoutArticles[i]]);
// }    
// bandNames=finalResult;
// console.log(bandNames);
// ----------------------------------------------
// var fruits = ['Apple','Orange','Kiwi','Strawberry'];
// fruits.splice(4,1,'Banana');
// console.log(fruits);
// --------------------------------------------
// let numbers=[-23,12,-17,19,-20,0,1,-12,-5,5,20];
// let even= numbers.filter(value=>value%2==0);
// console.log(even);//12,-20,0,-12,20
// -------------------------------------------
// var words=['one','two','three','four'];
// // words.forEach(function(word){
// //     console.log(word);
// //     if(word=='two'){
// //         words.shift();
// //     }
// // })
// // console.log(words.shift());
// // var ans= words.slice(-4,-2);
// // console.log(ans);
// // ----------------------------------------------------
// // function JsReverse(num) {
// //     //return the string
// //     //do not console.log here
// //       let num2=num.toString().split('').reverse().join('');
// //       let output='';
// //       if(num2[0]==0){
// //           for(let i=1;i<num2.length;i++){
// //               output= output + num2[i];
// //           }
// //       }
// //       return Number(output);
// //   }

// //   console.log(JsReverse(1230450));
// // -------------------------------------------------
// const obj ={a:1,b:2,c:3};
// console.log(Object.keys(obj).length);

// const str="world";
// const newStr = str.slice(1,-1);
// console.log(newStr);

// let num1 =10;
// let num2 =5;
// let result = num1>num2?num1<20? "Less than 20" :"Greater than or equal to 20" :"num1 is not greater than num2";
// console.log(result);

// let x = 2;
// function multiplyByX(y){
//     return y*x;
// }
// x=3;
// console.log(multiplyByX(4));

// const obj1={a:{b:1}};
// const obj2={a:{b:2}};
// console.log(obj1.a===obj2.a);

// const obj3 = {a:1,b:2,c:3};
// for(let prop in obj3){
//     delete obj3[prop];
// }
// console.log(obj3);

// const arr=[1,2,3];
// arr[10]=10;
// console.log(arr.length);

// var p=10;
// function foo(){
//     console.log(p);
//     var p=5;
//     console.log(p);
// }
// foo();

// let array9=[["Exhibit 1", "Category 1"],["Exhibit 2", "Category 2"],["Exhibit 3", "Category 3"],["Exhibit 4", "Category 3"]];
// // function uniqueCategories(a) {
// //     let unique=[];
// //     a.forEach(item =>{
// //         if(!unique.includes(item[1])){
// //             unique.push(item[1]);
// //         }
// //     })
// //     return unique;
// // }
// // let newResult=uniqueCategories(array9);
// // console.log(...newResult);
// function uniqueCategories(a){
//     let newResult =  new Set(a.map((item)=>item[1]));
//     return newResult;                                                                                                                                                                                                   
// }
// let answer9 =uniqueCategories(array9);
// console.log(...answer9);
// ---------------------------------------------
// const button = document.querySelector("button");
// button.addEventListener("click",function(){
//     alert("The button was clicked");
// })
// ---------------------------------------------
// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     alert("button was clicked");
//   });
// });
// *
// *#
// *#*
// *#*#
// *#*#*
// let char='';
// for(let x=1;x<=5;x++){
//     for(let y=1;y<=x;y++){
//         if(x%2==0){
//             char = char+"#";
//         }
//         else {
//             char = char+"*";
//         }
//     }
//     console.log(char);
//     char='';
// }

// while(3==3){
//     console.log('hello');
// }

// //code to check if the string is palindrome or not
// const input = prompt("enter a string to check if it is palidrome or not")

// function checkPalindrome(word){
//     const len = word.length;
//     for(let i=0;i<len/2;i++){
//         if(word[i]!==word[len-1-i])
//             return false;
//     }
//     return true;
// }

// console.log(checkPalindrome(input));

/*
Write a JavaScript code to process name as the sample below.

Sample Input: Rama Krishna Narayan

Sample Output: R. K. Narayan
*/

// const inputName = prompt("Enter your full name");

// function shotcutName(word){
//     let inpArr = word.split(' ');
//     let resultStr ='';
//     for(let i=0;i<inpArr.length-1;i++){
//             resultStr += inpArr[i].substring(0,1) +".";
//     }
//     console.log(resultStr +inpArr[inpArr.length-1]);
// }

// shotcutName(inputName);

// const date = new Date();
// console.log(date.getDate());
// date.setFullYear(2050,10,27);
// console.log(date);

// let today = new Date();
// let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let day = today.getDay();
// console.log("Today is: " + weekdays[day]);
// let hours = today.getHours();
// let ampm = (hours>12)? "PM" : "AM";
// if(hours>12){
//     hours-=12;
// }
// console.log("Current time is : " + hours + ampm +":"+ today.getMinutes() + ":" + today.getSeconds());

//Write a JavaScript function checkDate() to check if a given date is in the correct format or not.
// Correct date format: "MM-DD-YYYY" (for example: 03-18-2018)

// function checkDate(input){
//     let[month,date,year] = input.split("-");
//     if(date<1||month<1||year<1)
//         return false;
//     else if(date>31||month>12||year>9999)
//         return false
//     else 
//         return true
// }

// const inputDate = prompt("Enter the date");
// console.log(checkDate(inputDate));

/**
 * Write a JavaScript code to formulate date for a specified date after given 'n' number of days.

Sample Input:16th Jul, 2018 and n=30

Sample output:15th August, 2018

Note: Don't forget to account for leap years!
 */


// const inputDate = prompt("enter input date");
// const nValue = prompt("enter n value");
// let outstr='';

// function outputDate(input,n){
//     let alternateDate = new Date(input.setDate(input.getDate()+n));
//     alternateDate = alternateDate.toDateString().split(" ");
//     let[month,date,year] = alternateDate
//     putstr=(`${date}th ${month} ${year}`);
//     return outstr;
// }

// console.log(outputDate(inputDate,nValue));

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var newArray = array.filter(v => v % 3 === 0);

// console.log(newArray);

// let materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//   ];

//   console.log(materials.map(material => material.length));
// var val = "JavaScript String"
// splittedVal = val.split('a', 2)
// console.log(splittedVal);

// var todaysDate = new Date()
// console.log(todaysDate.toLocaleString());

// let materials = [{ element: "Hydrogen" }, { element: "Helium" }]; console.log(materials.map((element) => {
//     return { element, state: "gas" };
// }));

// let elements = [{ gas: "Hydrogen" }, { gas: "Helium" }, { gas: "Boron" }];

// console.log(elements.filter((element) => element.gas.length != 5));


// var empOne = {
//     name: "John",
//     empNumber: 1001,
//     emailId: "John@gmail.com"
// };

// //to get property names
// console.log("property names:")
// for (let property in empOne) {
//     console.log(property);
// }

// // to get the values of property
// console.log("property values:")
// for (let property in empOne) {
//     console.log(empOne[property]);
// }

// // to get the values of property using Object.values()
// console.log("property values using Object.values():")
// console.log(Object.values(empOne));

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     get foo() {
//       return this.foo();
//     }
//     foo() {
//       return this.height * this.width;
//     }
//   }

//   const square = new Rectangle(10, 10);
//   console.log(square.foo()); 

//   var json= '{"studentId":1001,"studentName":"Mark"}';
// //line 2
// var student=JSON.parse(json);
// console.log(student.studentId+"   "+student.studentName);

// class Shelter {
//     constructor(shelter_for) {
//         this.shelter_for = shelter_for
//     }
// }

// class Cage extends Shelter {
//     constructor(shelter_for, lock) {
//         super(shelter_for, lock)
//         this.lock = lock
//     }
//     getCage() {
//         console.log(this.shelter_for + "cage has " + this.lock + " lock type ");
//     }
// }

// monkey_cage = new Cage("monkey","closed")
// monkey_cage.getCage()

// class Monkey{
//     static eat_banana(){
//       console.log("eating banana")
//       Monkey.no_of_bananas-=1
//        console.log("No. of bananas left ",Monkey.no_of_bananas)
//     }
//   }
//   Monkey.no_of_bananas=13
//   gopher=new Monkey()
//   doodoo=new Monkey()
//   //line1
//   //line2
//   Monkey.eat_banana();Monkey.eat_banana()

// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 
// };

// Object.values(student).forEach(student=>{
//   console.log(student);
// })

//Regular expressions
// normal email format is username@mail.com
//check if the given email id is valid or not

// const email = prompt("enter email id to verify");
// const validRegex = /^[a-z0-9_]+@[a-z]+\.(com|in)$/;
// let result = (inputMail)=>{
//   if(inputMail.match(validRegex)){
//     return "valid email id";
//   };
//   return "invalid email id";
// }

// alert(result(email));

////[a-zA-Z0-9_] => this can be replace with [\w]

// const email = prompt("enter email id to verify");
// const validRegex = /^[a-z0-9_]+@[a-z]+\.(com|in)$/;
// alert(validRegex.test(email));

// console.log("hcllo".match(/h[abc]llo/));
// console.log("1ello".match(/.*[A-Z0-9].*/));

/**
 * Write a JavaScript program to search a date within a string.

Sample Input: "Albert Einstein was born in Ulm, on 14/03/1879."

Sample Output:14/03/1879.


 */
// const smInput="Albert Einstein was born in Ulm, on 14/03/1879.";
// let arr=smInput.match(/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/);
// console.log(arr[0]);
// function check(value) {
//     console.log(value);
//   }

//   function getTrip() {
//     setTimeout(function() {
//       return "Lets go to Trip";
//     }, 1500);
//   }

//   value = getTrip();
//   check(value);

// function foo(bar) {
//     console.log("Inside Foo");
//     bar();
// }

// function bar(test) {
//     console.log("Inside Bar");
// }

// foo(bar);

// function foo() {
//     console.log("Inside Foo");
//     return bar;
// }

// function bar() {
//     console.log("Inside Bar");
//     return test;
// }

// function test(){
//     console.log("Inside Test");
// }
// foo()()();

// function foo(bar) {
//     console.log("Inside Foo");
//     bar(test);
// }

// function bar(test) {
//     console.log("Inside Bar");
//     test();
// }

// function test(){
//     console.log("Inside Test");
// }
// foo(bar);

// function bookFlight(flightName){
//     return new Promise(function(resolve,reject){
//             if(flightName == "AirIndia"){
//                 setTimeout(resolve(5600),2000);
//             }
//             else{
//                 reject(Error("Flight can not be booked"));
//             }
//     })
// }

// function bookHotel(flightPrice){
//     return new Promise(function(resolve,reject){
//         if(flightPrice<=5000){
//             setTimeout(resolve(7000+flightPrice),1000);
//         }
//         else{
//             reject(Error("Flight Cost is too much"))
//         }
        
//     })
// }

// bookFlight("AirIndia")
//         .then(function (flightData) { return bookHotel(flightData) })
//         .then(function(cummulativeData){console.log("Total is"+ cummulativeData);})
//         .catch(e=>console.log(e.message));

// //for the below json related code to work html file should be linked and open in live server
// async function myFetchAPI() {
//     let response = await fetch('http://localhost:5500/courses.json');
//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body 
//         let json = await response.json();
//         console.log(json)
//     }
//     else {
//         console.log("HTTP-Error: " + response.status);
//     }
// }
// myFetchAPI();