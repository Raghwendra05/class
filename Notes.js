//let age=25; //block scopped redefination not possible reassignment possible
//age="yash" //willwork because it is dynamically typed
// var a=60; //funnction scopped or globally scoped redefinition possible reassignment possible
//const b=70; // value doesnt change

// if(true){
//     console.log(a);
// }
 //while naming camelCase is impo**
 //variable can start with number _ $

 //Datatypes : Type of data and its size
 //Primitive Datatype:Number(1,2,3,4),String("yash@34"),Boolean(true,false),undefined(variable not defined: let age;),null,Bigint(),Symbol
 //Non-Primitive:

 //Operators
 //operators: + - * / % = == & ^ !
//  let a=5;
//  let b="35";
//  console.log(b+a); 
//falsy: undefined, null, 0, false,Nan, 'string'
//truthy:anything which is not falsy
//console.log(false||'abac); ans:false; 

// Conditionals
//if(condition){}else{}
//if(condition){}else-if(condition)else{} else part is optional
//switch case

//Loops:
//for(int i=0;i<10;i++){body}
//while(condition){body}
//do{body}while();

//String : sequence of characters
//let name="yash";
//let name='yash';
//let name=`yash  //template string
//         is`;
//let name=new String("yash");
//console.log(name.length)
//console.log(name.toUpperCase());
// let str="hjhjhjhjhj";
// console.log(str.substring(2,4));

//Split:
// let str="hj hj h jh jhj";
// let words=str.split(' ');
// console.log(words);
// console.log(words.join('-'));

//Functions
// function nameisYash(){
//     console.log("yash");
// }
// nameisYash();//function call

//return functions
// function getSum(a,b){
//     let sum=a+b;
//     return sum;
// }
// console.log(getSum(3,4));

//const ans=function getSum(a,b){
//     let sum=a+b;
//     return sum;
// }
//console.log(ans);


//Objects: collection of key-value pairs
// let obj={
//     name:"yash",
//     "fullname": "yash singh",
//     age: 21,
//     gender: "Male",
//     greet: function(){
//         console.log("hello my niggas");
//     }
// };
// console.log(obj);
// obj.greet();

//Arrays: Collection of data/items
//let arr=[1,2,3,4,"ys"];
// Array construcor let brr=new Array(1,2,"ysh");
//console.log(brr);

//Built-in methods: push,pop,shift,unshift,slice, splice, map,filter,reduce,sort,indexof,find
// let arr=[1,2,3,4,"ys"];
// arr.push(3);
// arr.push(45);
// arr.pop();
// arr.shift(); //deletes the elemen at 0 index
// arr.unshift(23)//adds in the 0th index;
// arr.slice(2,4); //part of array
// arr.splice(1,0,"kunal"); // change array content insertion remove replace
// console.log(arr);

//Array Map
// let arr=[1,2,3,4,"ys"];
// let arrMap=arr.map((number)=>{
//     return number*number;
// });
// console.log(arrMap);


// Array Filter:
// let arr=[1,2,3,4,"ys"];
// let arrMap=arr.filter((number)=>{
//     if(number%2==0){
//         return true;
//     }
//     return false;;
// });
// console.log(arrMap);


// Array Reduce
// let arr=[1,2,3,4,"ys"];
// let arrReduce=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(arrReduce);

// Array for Each;
// let arr=[1,2,3,4,"ys"];
// let arrforEach=arr.forEach((value,index)=>{
//     console.log(value," ",index);
// });
// console.log(arrforEach);

//for in ,for of

//Array in functions
// let arr=[1,2,3,4,5,5,6];
// function getSum(arr){
//     let len=arr.length;
//     let sum=0;
//     for(let i=0;i<len;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(getSum(arr));


//Hoisting: it shifts the variable declaration and function declaration to the top of the scope.(var,function,classrl)
//Function Hoisting:
// sayMyName("yash");
// function sayMyName(name){
//     console.log(name);
// }  It works properly

//Variable Hoisting:
// console.log(age);
// var age=25; it gives undefined beacuse only name is pushed not its value
//Doesnt work for let and const


//Class: 
// class Human{
//     age;//public
//     wt=80;//public
    
//     #ht=180;//private
//     constructor(newAge,newHeight){
//         this.age=newAge;
//         this.#ht=194;
//     }

//     walking(){
//         console.log("I am walking",this.#ht);
//     }

//     get hiegth(){
//         return this.#ht;
//     }

//     set changeHieght(data){
//         this.#ht=data;
//     }
// }
// let obj=new Human(13,184);
// console.log(obj.age);
// obj.walking();

// Date
// let curr=new Date();
// console.log(curr);

// DOM: Document Object Model(Tree like structure)
// BOM: Browser Object Mode

//DOM with html

//DOM with css
//We can do both accessing and setting by:
// 1) .style; only one at a time
// 2) for accessing: .cssText; to set: .style.cssText;
// 3) .setAttribute('style',"bgcolor: white"); you can do 
 // We can add and fetch class names:
 // .className and .className=" class_1 class_2";

//Browser Events
  // Event Target: entity where event is recieved
  //Event Object
  // Default actions can be changed by event.preventDefault();

// Make code faster:
//Standar way to find how much time my code is take:
//performance.now();use before and after funtion then measure thr difference
//Reflow:Process of calculating position, dimension of the element on the page(high computations)
//Repaint:Process of displaying content pixel by pixel.(Faster then reflow process).
//Good Practice:
//Documen Fragment: lightweigth doc objectwhen adding an elent it neither does reflow nor repaint hence fast.
// let  fragment=document.createDocumentFragment();
// for(let i=1;i<=100:i++){
//     let para=document.createElement('p');
//     para.textContent="this is para"+i;
//     //No reflow and repaint in this line
//     fragment.appendChild(para);
// }
// //1 Repaint and 1Reflow
// document.body.appendChild(fragment);



//Event Loop:
// Synchronous Code:line of code which execute at the same time ex.console.log("yash")
// ASynchronous Code: doesnt wait for execution of code
    //  uses setTimeout(function,duration);

// Blocking:
// console.log("start");
// setTimeout(sayMyName,5000);
// console.log("end");//jjab tk upar  wala execute ni hota ye wala blocked rhega
//There fore we use Event Loop
    //CallStack
    //Browsers
    //CallBack



  //HIGH ORDER FUNCTION:
// function highOrder(name){
//   return name();
// }

// function printStudentdetails(){
//   var name="Yash";
//   var fees=30000;
//   console.log(name);
//   console.log(fees)
// }
// highOrder(printStudentdetails);

// ASYNC FUNCTIONS


//MAP
// let arr=[1,2,3,4,5];
// const newArr=arr.map((x)=>x*2);
// console.log(newArr);

//Prototypes in js
// let arr= [2,4,5,6,7,8]
// const newArr = arr.map((x)=>x*2)
// console.log(newArr)

// to make replica of map we have to use PROTOTYPEES
// function doubleData(x){
//     return x*x;

// }
// // this keyword is not used with arrow function
// Array.prototype.mapReplica=function(logic){
//     let outputArray=[];
//     for(let i=0;i<this.length;i++){
//         outputArray.push(logic(this[i]));
//     }
//     return outputArray;
// }
// const myProtoData = arr.mapReplica(doubleData);
// console.log(myProtoData)


//Filters in js
// const words=["spray","elite","exuberant","destruction","present"];

// Array.prototype.filterReplica=function(logic){
//   let outputArr=[];
//   for(let i=0;i<this.length;i++){
//     if(logic(this[i])){
//     outputArr.push(this[i]);
//   }
// }
//   return outputArr;
// }
// const protoData=words.filterReplica((word)=>word.length>6);
// console.log(protoData);

//Reduce in js
// const arr=[1,2,3,4,5];
// Array.prototype.reduceReplica=function(logic,initial){
//   let acc=initial;
//   for(let i=0;i<this.length;i++){
//     acc=logic(acc,this[i]);
//   }
//   return acc;
// }
// const finalAnswer=arr.reduceReplica((acc,curr)=>acc+curr,0);
// console.log(finalAnswer);

// Promises
// const myPromise= new Promise((resolve,reject)=>{
//   const success=true;
//   setTimeout(()=>{
//     if(success){
//       resolve("Got Placement");
//     }
//   },2000)
// })
// myPromise // All .then will work synchronously means at the same time.
// .then((res)=>console.log(res))
// .then(()=>setTimeout(()=>console.log("PARTY")),3000)
// .then(()=>setTimeout(()=>console.log("Will Work")),4000)
// function placement(plaxementStep,delay){
//   return new Promise((resolve,reject)=>{
//   const success=true;
//   setTimeout(()=>{
//     if(success){
//       console.log(plaxementStep);
//       resolve(plaxementStep);
//     }
//   },delay);
// })
// }
// placement("got Placement",5000)
// .then(()=> placement("party time",3000))
// .then(()=>placement("Working",2000))
// .then(()=>placement("LayOff",4000));


//Async & Await: to take any function asynchronously we use async and await keywords
//In JavaScript, fetch is used to make HTTP requests (GET, POST, etc.) to servers or APIs. It returns a Promise that resolves to the Response object.
async function fetchData(){
  const data=await fetch('https://dummyjson.com/products');
  const finalData= await data.json();
  console.log(finalData);
}
fetchData();