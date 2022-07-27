// ***************************************************************************************************************
// Callback hell:-'Because we have to call callbacks inside callbacks, we get a deeply nested dooperation() function, which is much harder to read and dibug. This is something called 'callback function' or 'Pyramid of doom';

// let stocks={
//     Fruits:['Strawbary','grapes','banana','apple'],
//     liquid:['Water','ice'],
//     holder:['cone','cup','stick'],
//     toppings:['chocolate','peanuts'],
// };
// let order=(fruits,call_production)=>{
//     console.log('order placed.Please Call the Production')
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[fruits]} was selected `)
//         setTimeout(()=>{
//             console.log(`${stocks.Fruits[fruits]} was Chopped`)
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid} added `)
//                 setTimeout(()=>{
//                     console.log(`bhhhhhhhhhhhhhhhhhh`)
//                     setTimeout(()=>{
//                         console.log(`hold ice cream on ${stocks.holder[2]}`)
//                         setTimeout(()=>{
//                              console.log(`${stocks.toppings[1]} topping added`)
//                              setTimeout(()=>{
//                                 console.log(`take your ice cream...`)
//                              },2000)                                       
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//         call_production();
//     },2000)
// }
// let production=()=>{
//     console.log(`Production has Started`)
// };
// order(1,production)


//****************************************************************************************************************


// let bio={
//     name:['Yaman dudhat','Gautam Ramani','Bhavin satasiya','Ansh sheladiya','Parimal jodhani'],
//     age:['19','20','21','22'],
//     city: ['Surat','Navsari','vapi','Vadodara'],
//     state:['Maharastra','Gujarat','Rajsthan','Uttar Pradesh'],
//     college:['Scat','SSASIT','DDU','pdpu'],
//     diploma:['Tapi','S.S.Gandhi','Bhagwan Mahavir'],
//     scholling:['Tapovan','Ashadeep','Nalanda Vidhyalay'],
//     goal:['Senior Position','Junior Position'],
//     members:['7','10','8','4'],
//     hobby:['Cricket','Music','Science Friction Movies','Vollyball','Chess'],    
// };
// let introduction=(start)=>{
//     console.log(start())
//     console.log('********************************************')
//     setTimeout(()=>{
//         console.log(`hello...my name is ${bio.name[1]}`)
//         setTimeout(()=>{
//             console.log(`i am ${bio.age[3]} year old from ${bio.city[0]}, ${bio.state[1]}.`)
//             setTimeout(()=>{
//                 console.log(`recent, i am graduate from ${bio.college[1]} college in a field of Computer Engineering,`)
//                 setTimeout(()=>{
//                     console.log(`completed diploma engineering from ${bio.diploma[0]} college and`)
//                     setTimeout(()=>{
//                         console.log(`SSC from ${bio.scholling[2]}.`)
//                         setTimeout(()=>{
//                             console.log(`My long turm goal is i Wish i am on ${bio.goal[0]} and giving a best of my knowledge to an company.`)
//                             setTimeout(()=>{
//                                 console.log(`we have ${bio.members[1]} members in my Family.`)
//                                 setTimeout(()=>{
//                                     console.log(`i love playing to ${bio.hobby[0]}, listening to ${bio.hobby[1]}, and watching a ${bio.hobby[2]}.`);
//                                    setTimeout(()=>{
//                                     console.log(`\nthats all about me`);    
//                                     console.log(`*********************************`);    
//                                     },2000) 
//                                 },2000)
//                             },2000)
//                         },2000)
//                     },2000)
//                 },2000)
//             },2000)
//         },2000)
//     },3000)
// }
// let iq=()=>{
//  return `let me Introduce Yourself in Brief`;  
// }
// introduction(iq);
