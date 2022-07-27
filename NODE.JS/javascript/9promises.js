// Promises
// ****
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//     - Promises divided into two categories.

//     1) Promise Creation

//     2) Promise Consumption

//     - Producer will create the Promises

//     - Consumer will consume the Promises

//     "Promise" is the Predefined class, used to create the "Promises"

//     we can consume Promises in two ways

//     1) then()

//     2) async & await keywords

//     Promises are alternative solution of Callback hell

// ****************************************then**********************************************************

// let promise1 = new Promise((resolve, reject) => {
//   //   resolve("tomarrow we will discuss async & await keyword");
//   reject("cant do that not clear promises");
// });
// console.log(typeof Promise);
// console.log(promise1);

// promise1.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello_1");
//     // reject("reject promise");
//   }, 5000);
// });
// promise1.then(
//   (posRes) => {
//     console.log("Before");
//     console.log(posRes);
//     console.log("After");
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello_1");
//     }, 2000);
//   });
  
//   let promise2 = new Promise((resolve, reject) => {
//     resolve("Hello_2");
//   });
  
//   promise1.then(
//     (posRes) => {
//       console.log(posRes);
//     },
//     (errRes) => {
//       console.log(errRes);
//     }
//   );
  
//   promise2.then(
//     (posRes) => {
//       console.log(posRes);
//     },
//     (errRes) => {
//       console.log(errRes);
//     }
//   );

// ***********

// let stocks={
//     Fruits:['Strawbary','grapes','banana','apple'],
//     liquid:['Water','ice'],
//     holder:['cone','cup','stick'],
//     toppings:['chocolate','peanuts'],
// };
// let is_shop_open=true;
// let order = ( time, work ) => {
//     return new Promise( ( resolve, reject )=>{ 
//      if( is_shop_open ){
//           setTimeout(()=>{
//           resolve( work() )
//          }, time)
//       }
//       else{
//         reject( console.log("Our shop is closed") )
//       }
//     })
//   }

// // step1
//   order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
  
// // step 2
// .catch(()=>{
//     console.log("Customer left")
//   })

// // step 3
// .then(()=>{
//       return order(0000,()=>console.log('production has started'))
//     })
    
// // step 4
// .then(()=>{
//     return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// // step 5
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// // step 6
// .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
// })

// // step 7
// .then(()=>{
//     return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// // step 8
// .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// // Step 9
// .then(()=>{
//     return order(2000, ()=>console.log("Serve Ice Cream"))
// })

// // step10
// .finally(()=>{
//     return console.log('\nEnd of the day\nOur Shop is Closed')
// })

// *************
// let bio={
//     name:['Gautam Ramani','Yaman Dudhat','Parimal Jodhani'],
//     age:['20','22','21'],
//     city:['Vadodara','Jamnagar','Surat'],
//     state:['Gujarat','Maharastra','Rajsthan'],
//     college:['Scat','SSASIT','PDPU'],
//     diploma:['S&S Gandhi','Bhagwan Mahavir','Tapi'],
//     scholling:['Nalanda Vidhyalay','Tapovan','Ashadip'],
//     member:['8','10','9'],
//     hobby:['Vollyball','Music','Cricket'],
// }
// let is_bio_available=true;
// let order=(time,work)=>{
//     return new Promise((reslove,reject)=>{
//         if(is_bio_available){
//             setTimeout(()=>{
//                 reslove(work())
//             },time)
//         }
//         else{
//             reject(console.log(`bio is not available`))
//         }
//     })
// }
// order(2000,()=>console.log(`Let me introduce yourself`))
// .then(()=>{
//     return order(2000,()=>console.log(`My name is ${bio.name[0]}`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`i am ${bio.age[1]} years old and form ${bio.city[2]},${bio.state[0]}.`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`Recent i am graduate from ${bio.college[1]} College in a field of Computer Engineering,`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`Completed diploma engineering from ${bio.diploma[2]} coolege and SSC from ${bio.scholling[0]}.`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`We have ${bio.member[1]} members in my family`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`I love Playing to ${bio.hobby[2]}.`))
// })
// .then(()=>{
//   return order(2000,()=>console.log(`\nthats all about me`))
// })

// *********************************************Async & Await*************************************************

//async-Await:- An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };
// let is_shop_open=true;
// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(resolve,ms)
//         }
//         else{
//             reject(console.log(`shop is closed`))
//         }
//     })
// }
// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${stocks.Fruits[0]} was selected`)

//         await time(0000)
//         console.log('production has started')

//         await time(2000)
//         console.log("Fruit has been chopped")

//         await time(1000)
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

//         await time(2000)
//         console.log("start the machine")

//         await time(2000)
//         console.log(`ice cream placed on ${stocks.holder[1]}`)

//         await time(2000)
//         console.log(`${stocks.toppings[0]} as toppings`)

//         await time(2000)
//         console.log("Serve Ice Cream")
//     }
//     catch(error){
//         console.log('customer left')
//     }
// }
// kitchen();

// *****************************************************************************

// let bio={
//     name:['Gautam Ramani'],
//     age:['22'],
//     city:['Surat'],
//     state:['Gujarat'],
//     college:['SSASIT'],
//     diploma:['Tapi'],
//     scholling:['Nalanda Vidhyalay'],
//     goal:['Senior Position'],
//     member:['10'],
//     hobby:['Cricket'],
// }
// let is_bio_available=true;
// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(is_bio_available){
//             setTimeout(resolve,ms)
//         }
//         else{
//             reject(console.log('not available'))
//         }
//     })
// }
// async function detail(){
//     try{
//         await time(1000)
//         console.log(`let me introduce yourself\n`)

//         await time(2000)
//         console.log(`my name is ${bio.name[0]}`)

//         await time(1000)
//         console.log(`i am  ${bio.age[0]} old and from ${bio.city[0]}, ${bio.state[0]}`)

//         await time(1000)
//         console.log(`recent i am graduate from ${bio.college} collge in field of computer engineering`)

//         await time(1000)
//         console.log(`completed diploma engineering from ${bio.diploma[0]} college and SSC from ${bio.scholling[0]}.`)

//         await time(1000)
//         console.log(`my long turm goal is i wish i am on ${bio.goal[0]} and giving best of my knowledge to an company.`)

//         await time(1000)
//         console.log(`we have ${bio.member[0]} members in my family.`)

//         await time(1000)
//         console.log(`i love playing to ${bio.hobby[0]}.`)

//         await time(1000)
//         console.log(`\nthats all about me\n*****************`)
//     }
//     catch(error){
//         console.log(`not possible`)
//     }
// }
// detail();

//*******************************Callback_hell ex.************************************

// function add(num,callback){
//     return callback(num+5,false)
// }
// function sub(num,callback){
//     return callback(num-3,false)
// }
// function mul(num,callback){
//     return callback(num*2,false)
// }
// function div(num,callback){
//     return callback(num/2,false)
// }
// add(5,(addRes,error)=>{
//     if(!error){
//         console.log('addRes:',addRes)
//         sub(addRes,(subRes,error)=>{
//             if(!error){
//                 console.log('subRes:',subRes)
//                 mul(subRes,(mulRes,error)=>{
//                     if(!error){
//                         console.log('mulRes:',mulRes)
//                         div(mulRes,(divRes,error)=>{
//                             if(!error){
//                                 console.log('divRes:',divRes)
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// **********************************Promise .then************************************************
// let num=5;
// let is_arithmatic_possible=true;
// let cal=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//         if(is_arithmatic_possible){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
//         }
//         else{
//             reject(console.log('rejected'))
//         }
//     })
// }
// cal(0000,()=>console.log('Arithmatic Problems'))
// .catch(()=>{
//     console.log("not possible")
//   })
// .then(()=>{
//     return cal(0000,()=>console.log('add:',a=num+5))
// })
// .then(()=>{
//     return cal(1000,()=>console.log('sub:',b=a-3))
// })
// .then(()=>{
//     return cal(1000,()=>console.log('mul:',c=b*2))
// })
// .then(()=>{
//     return cal(1000,()=>console.log('div:',d=c/2))
// })
// .finally(()=>{
//     console.log('done')
// })

// ******************************Promise async&await****************************************

// let num=5;
// let is_arithmatic_possible=true;
// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(is_arithmatic_possible){
//             setTimeout(resolve,ms)
//         }
//         else{
//             reject(console.log('Not Possible'))
//         }
//     })
// }

// async function Arithmatic(){
//     try{
//         await time(0000)
//         console.log('add:',a=num+5)

//         await time(1000)
//         console.log('sub:',b=a-3)

//         await time(1000)
//         console.log('mul:',c=b*2)

//         await time(1000)
//         console.log('div:',d=c/2)
//     }
//     catch(error){
//         console.log('rejected',error)
//     }
// }
// Arithmatic();