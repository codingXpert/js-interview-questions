//1
// let a =[];
// let b=[];
// console.log(a==b);
// console.log(a===b);


//2
// let a = [];
// let b =a;
// console.log(a==b);
// console.log(a===b);


//3(i)
// let a = [20];
// let b = [20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

//3(ii)
// let a = [20];
// let b = ['20'];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);
// console.log(a[0]);
// console.log(typeof(a[0]));


//4(i)
// let z = [1,2,3,4]
// console,log(z);
// console.log(...z);
//NOTE:-- By appliying 3 dots(i.e,REST operator) the values of an array or an object is destructured(i.e,it will not behave as array or object ,it will be printed as normal number or tesx)

//4(ii)
// let z = {
//     name:"xyz",
//     roll:20,
//     age:23
// }
// console.log(z);
// console.log(...z) //de

// 4(iii)
// const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];
// const [firstName, lastName, website] = profile;//creating multiple array variables in one go an d assigning profile values accordingly in these variables 
// console.log(firstName); 
// console.log(lastName);
// console.log(website);

//4(iv)
// const [firstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];
// console.log(firstName); 
// console.log(otherInfo); 

// 4(v)
// const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];
// console.log(website);

// 4(vi)
// const [firstName = "Tobi", website = "CodeSweetly"] = ["Oluwatobi"];
// console.log(firstName); // "Oluwatobi"
// console.log(website);

// 4(vii)
// let firstName = "Oluwatobi";
// let website = "CodeSweetly";
// [firstName, website] = [website, firstName];
// console.log(firstName);
// console.log(website); 


// 4(viii).Swapping trick
// let first = 4;
// let second = 7;
// [first, second] = [second, first];
// console.log(first);
// console.log(second); 


//5
// console.log(typeof NaN);


//6
// let data = 10 - - 10;
// console.log(data);


//7
// let data = new Set([1,2,3,4,1,2]); //Set removes all the duplicate elements and counts the length of the remaning elements
// console.log(data);


//8
// console.log(new Set([1,2,3,4,5,2]));
// console.log(Set([1,2,3,4,5,2]));


//9
// let data = {name:"ANil"};
// console.log(delete data.name); //prints true(ack i.e yes! name is deleted)
// console.log(data);


//10
// let data = {name:"anil"};
// console.log(delete data);  //prints false(because we can't delete the complete object and hence ack is false)
// console.log(data);


//11(i)
// const data = ["peter" , "anil" , "sam"];
// const [y] = data;
// console.log(y)


//11(ii)
// const data = ["peter" , "anil" , "sam"];
// const [y , x , z ] = data;
// console.log(y , x , z)


//11(iii)
// const data = ["peter" , "anil" , "sam"];
// const [ , y] = data;
// console.log(y)


// 11(iv)
// const data = ["peter" , "anil" , "sam"];
// const [, , y] = data;
// console.log(y)


// 11(v)(how to extract data from obj without using dot)
// const data = {name:"anil" , age:"29" , skills:"23"};
// const {name , age, skill}=data;
// console.log(name , age);
// console.log([name]);


//12(merging two objects)
// let data = {name:"anil" , age:23 , skill:23};
// let info  = {city:"xyz", mail:"xyz@gmail.com"};
// data = {...data , ...info};
// console.log(data);

//13
// let data = {name:"anil" , age:23 , skill:23};
// let info  = {city:"xyz", mail:"xyz@gmail.com"};
// data = {data , ...info};
// console.log(data);


// 14
// let data = {name:"anil" , age:23 , skills:23};
// let info  = {city:"xyz", skills : 56, mail:"xyz@gmail.com"};
// data = {...data , ...info};
// console.log(data);


// 15
// const name= "anil";
// console.log(name());


// 16
// const result = false || {} ||null;
// console.log(result);


// 17(if none of the value is returning true the last value will be picked)
// const result  = (null || false || '');
// console.log(result);


//18
// const result = [] || 0 || true;
// console.log(result);


// 19
//  console.log(Promise.resolve(5));


// 20(here unicode of these emoji is compared)
// const result = ("❤" === "❤");
// console.log(result);

// 21
// JSON.parse();
//what this method will do?
// Ans:Parse JSON to a JavaScript value


// 22(i)
// let name = 'sidhu';
// function getName(){
//     console.log(name);
//     let name = 'anil';  //(hoisting is not possiable in case of let and const)
// }getName();


// 22(ii)
// let name = 'sidhu';   
// function getName(){
//     console.log(name);
//     const name = 'anil';  //(hoisting is not possiable in case of let and const)
// }getName();


// 22(iii)
// let name = 'sidhu';
// function getName(){
//     console.log(name);
//     var name = 'anil';  //(printis undefined because of hoisting)
// }getName();

// 23(i)
// let name = 'anil';
// function getName(){
//     console.log(name);
// }getName();


// 23(ii)
// function getName(){
//     let name = 'anil';
//     console.log(name);
// }getName();


// 23(iii)
//  function getName(){
//         let name = 'anil';
//     }getName();
//     console.log(name);


//24
// console.log(`${(x => x)('I love')} to program`);


// 25
// function sumValues(x , y ,z){
//     return x + y + z;
// }
//  console.log(sumValues(...[1,2,3]));  //(right way , because access elements we need to destruct the array)
//  console.log(sumValues([...1,2,3]));  //(wrong way)
//  console.log(sumValues([...[1,2,3]])); //(wrong way)
//  console.log(sumValues([1,2,3]));      //(wrong way)
    

//26
// const name = 'code step by step';
//    console.log(!typeof name);
// console.log(!typeof name === 'object');     //(false==='object' = false)
// console.log(!typeof name === 'string');     //(false ==='string' = false)
  

//27
// const name = "anil";
// const age = 21;
//   console.log(isNaN(name));
//   console.log(isNaN(age));


// 28(i)
// let person = {name : 'Anil' };
// console.log(person);
// console.log(person.name);
// person.name = 'Sonu';
// person.age = 21;
// console.log(person);
// console.log(person.name);

//28(ii)
// let person = {name : 'Anil'};
// Object.seal(person); // by applying seal() we can't add any key and value , we can only modify the existing value
// person.name=('Sunil');  //(possiable)
// person.age=(21);        //(not possiable)
// console.log(person);


// 29
// let data = [2,9,0,10];
// data.shift()  //delets first element only
// console.log(data);


//  30
// let data = [2 ,9 , 0 , 10];
// data.pop();  //removes last element only
// console.log(data);


// 31(odd or even)
// let a=30;
// console.log(a%2);


// 32
// let data = {name : "anil"}
// delete data.name;
// console.log(data);


// 33(convert string result into boolean (false boolean))
// let data = "true";
// console.log(typeof data);
// console.log(!data)
// console.log(typeof !data);     


// 34(convert string result into boolean (true boolean))
// let data = "true";
// console.log(!!data);


// 35
// What is diff between Map() and foreach()
// ans:- Map() always return something but foreach does not


// 36
// let data = ['anil' , 'peter' , 'bruce'];
// delete data[1];
// console.log(data);


// 37
// let data = ['anil' , 'peter' , 'bruce'];
// delete data[1];
// console.log(data);
// console.log(data.length); 


// 38
// merge two array
// let a = [1,2,3];
// let b = [4,5,6];
// console.log([...a , ...b]);


// 39     
// which 4 will be pinted(ans:-both                                                                                                                                                                                           )
// let a = [1,2,3,4];
// let b = [4,5,6];
// console.log([...a , ...b]);


// 40
// let c = 3 ** 3;
// console.log(c);
// let d = 3 *** 3 ;  //produce error , we can only use 2 *
// console.log(d);


// 41
// let a = 2;
// setTimeout(()=>{
//     console.log(a)
// } , 0);
// a = 100;


// 42
// let a =2;
// let A=30;
// console.log(A);


//43
// let a = "like";
// let b = `like`;
// console.log(a === b);

//44
// let a = 1;
// let b = 2;
// console.log(--b === a)


// 45
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); //(i.e, (true === -1 ))


//46
// console.log(3 * 3);
// console.log(3 ** 3);
// console.log(3 *** 3);  //(Error)


//47
// console.log(a);
// var a;       //(hoisting)


// 48
// console.log(b);
// let b;
// console.log(c);
// const c;      //hoisting is not possiable in case of let and consr


// 49
// console.log([[[[]]]]);


// 50  
//How to find or get OS name in js
// console.log(navigator.platform) ;


// 51
// let for = 40;  //we can not decleare a reserved keyword as a veriable


// 52(i)
// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name = 'apple';
//     let price = 20;
// }
// fruit();


// 52(ii)
// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name = 'apple';
//     var price = 20;
// }
// fruit();


// 53
// for(var  i = 0 ; i< 3 ; i++){
//     setTimeout(() => console.log(i) , 1);
// }


// 54
// for(let  i = 0 ; i< 3 ; i++){
//     setTimeout(() => console.log(i) , 1);
// }

//55
// console.log(!"anil");
// console.log(typeof ("anil"));


// 56
// console.log(+true);    //whenever we append a + sign before any boolean value it become 1.
// console.log(typeof +true);  


// 57
//  let data = 'size';
//  const bird = {
//     size:'small'
//  };
//  console.log(bird[data]);
//  console.log(bird['size']);
//  console.log(bird.size);
//  console.log(bird.data);     //we can use a variable only in square bracket


// 58
// let c = {name : 'petter'};
// let d;
// d = c;
// c.name = "anil";
// console.log(d.name);  //because memory location of c and d is same


//59
// var  x ;
// var x = 10;
// console.log(x);


//60
// var x ;
// let x=10;
// console.log(x);


//61
// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);  //because b is an object


// 62
// let name;
// name = {};
// console.log(typeof name);


//63
// function fruit (){
//     console.log("woof");
// }
// fruit.name = "apple";  //the is wrong operation but it will not produce any error , because are not removing anything from function , we are just adding 
// fruit();


//64
//  function sum (a , b){
//     return a + b;
//  }
//  console.log(sum(1 , "2"));


//65
// let n= 0;
// console.log(n++);
// console.log(++n);
// console.log(n)
 

//66(Spread operator i.e, ...)
// function getAge(...args){
//     console.log(args);
//     console.log(typeof args);
// }
// getAge(21 , 22);


// 67
// function getAge(){
//     'use strict'
//    let age = 21;   //if we don't declear the the type of variable then it bydefault it behaves as 'var' ,  but not in the case of strict mode. Here we need to declear type of variable(var , let , const) 
//     console.log(age);
// }
// getAge();


// 68
// const sum = eval('10*10+5');   //eval = evaluate the values enclosed in string form
// console.log(sum);


// 69
// const obj = {1:"a" , 2:"b" , 3:"c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));


// 70
// const obj = {a:"one" , b:"two" , a:"repeat"};
// console.log(obj); // the last value will be printed , but position will be first


// 71
// for(let i =1;i<5;i++){
//     if(i == 3) continue;
//     console.log(i)
// }


// 72
// const foo = () => console.log('first');
// const bar = () => setTimeout(() => console.log('second'));
// const baz = () => setTimeout(() => console.log('third')); 
// bar();
// foo();
// baz();


// 73
{/* <div>
<div onClick = "alert('first')"></div>
<div onClick = "alert('second')"></div>
<buttton onClick = "alert('button')">Click</button>
</div>
OUTPUT
button
second 
first  */}


// 74
// const person = {name : 'anil'};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person , 21));
// console.log(sayHi.bind(person , 21)());  //bind function needs to call manually


//75
// function sayHi() {
//     return (()=>0)();
// }
// console.log(sayHi());
// console.log(typeof sayHi());  //since the arrow function is returning 0


// 76
// function sayHi() {
//     return (()=>0);
// }
// console.log(sayHi());
// console.log(typeof sayHi()); 


//77
// console.log(typeof typeof 1)  //i.e, typeof(1) = number , now again typeof(number)=string


// 78
// const n = [1,2,3,];
// n[6]=11;
// console.log(n)


//79 
// const n = [1,2,3];
// n[9] = n;
// console.log(n);  //infinite array , because it puts a new array in every 9th position


// 80
// Q. everything in JavaScript is either a ......... 
// ans:-primitive(number , boolean, string etc) or Object


// 81 
// console.log(!!null);
// console.log(!!"");
// console.log(!!1)


// 82
// console.log(setInterval(() => console.log('hii') , 1000));
// console.log(setInterval(() => console.log('hii') , 1000));  //each setInterval() gives us unique id .and by using these ids we can stop any specfic id 
// console.log(setInterval(() => console.log('hii') , 1000));


// 83
// console.log("anil");
// console.log(..."anil");  //the string is broken down into individual character
// console.log([..."anil"]); ////the string is broken down into individual character and forms a character array


//84
// const firstPromise = new Promise((res , rej) => {
//     setTimeout(res , 500 , 'one');
// });
// const secondPromise = new Promise((res , rej) => {
//     setTimeout(res , 100 , 'two');
// });
// Promise.race([firstPromise , secondPromise]
//   ).then(res => console.log(res))     //make a race amoung the promises and that promise will be printed who wins the rase i.e, who is resolved first (i.e, whose timeout is low)


//85(i)
// let person = {name:'peter'};
// const members = [person];
// person = null;
//console.log(person);
// console.log(members);   //because object and array has different memory location 


// 85(ii)
// let person = {name:'peter'};
// const members = {person};
// person = null;
// console.log(person);
// console.log(members);   //because object1(person) and object2(members) has different memory location 


// 86
// const person = {
//     name : "batman",
//     age : 21
// };
// for(const item in person){
//     console.log(item);
//     console.log(person[item])
// }

// 87
// let data = 3 + 4 + '5';
// console.log(data);
// console.log(typeof data);


// 88(i)
//console.log(typeof 3+4+'5')    // because execution happens from left to right:- So, typeof 3 = number,
//after that 4 and 5 is  concatenated and hence  , number+45 = number45


// 88(ii)
// console.log(typeof(3+4+'5'));    // the priority of bracket is higher.So first the task inside is finished then type is checked



// 89
//console.log(3 + 4 + +'5');    //whenever we put a + sign infront of a string that string is changed to it numeric value
// console.log(typeof (3 + 4 + +'5'))


// 90
// console.log([]==[]);   // because memory location is different



// 91
// let data = [1,2,3].map(num => {
//     if(typeof num === 'number') return;
//     return num*2;
// });
// console.log(data);


// 92
// function getInfo(member){
//     member.name = 'Anil';
// }
// const person = {name: 'sunil'};   //because , when we pass person to getInfo its reference is passed and there name is changed which also refelects in original refrence(person)
// getInfo(person);
// console.log(person);


//93
// function car(){
//     this.make = 'tata';
//     return {make:'kia'};  //over writes the old value of make
// }
// const myCar = new car();
// console.log(myCar.make);


// 94
// (()=>{
//     let x = (y = 10);
// }) ();
// console.log(x)                 //not accessable outside it scope 
// console.log(typeof (x));


// 95
// (()=>{
//     let x = y =10  //actual declearation let x =10 and var y =10(that's why y is accessable outside);
// })();
// console.log(y);  
// console.log(typeof (y));


// 96
// (()=>{
//     let x =10;
// })();
// (()=>{
//     let x =10;
// })();
// console.log(typeof(x));

// 97
// (()=>{
//     let x = y=10;
// })();
// (()=>{
//     let x = y =20;
// })();
// console.log(y)


// 98
// let x= 100;
// (()=>{
//     var x = 10;
// })();
// console.log(x);


//99
// console.log(true -  true);


//100
// console.log(true +  +'10');