//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
// setTimeout(() => {
//   console.log("eat");
// }, 2000);

// console.log("I");
// console.log("eat");
// console.log("Ice Cream");

// console.log("I");

// setTimeout(() => {
//   console.log("eat");
// }, 2000);

// console.log("Ice Cream");

// let order = (call_production) => {
//   console.log("Order placed. Please call production");

//   call_production();
// };

// let production = () => {
//   console.log("Production has started");
// };

// order(production);

// 1st Function

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//         setTimeout(() => {
//           console.log("start the machine");
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log("serve Ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// let order = (work) => {
  // return new Promise((resolve, reject) => {
    // if (is_shop_open) {
      // setTimeout(() => {
      // work is 👇 getting done here
      // resolve(work());

      // Setting 👇 time here for 1 work
      // }, time);
    // } else {
      // reject(console.log("Our shop is closed"));
    // }
  // });
// };

// order(() => console.log(`${stocks.Fruits[0]} was selected`))
  // step 1
  // order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  //   // step 2
  // .then(() => {
  //   return order(() => console.log("one"));
  // })

  // //   // step 3
  // .then(() => {
  //   return order(() => console.log("two"));
  // })

  // //   // step 4
  // .then(() => {
  //   return order(() => console.log(`three`));
  // });

//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   // step 6
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })

//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })

//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   });

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log("Add ice and water");
//         setTimeout(() => {
//           console.log("Machine started bhmmmmmmmmmmmmmm");
//           setTimeout(() => {
//             console.log(` container  ${stocks.holder[0]} was selected`);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };
// order(0, production);

// function add(num, callBack) {
//   return callBack(num + 5, false)
// }
// function sub(num, callBack) {
//   return callBack(num - 3, false)
// }
// function mul(num, callBack) {
//   return callBack(num * 2, false)
// }
// function div(num, callBack) {
//   return callBack(num / 2 - 2, false)
// }

// add(5, (addRes, error) => {
//   if (!error) {
//       sub(addRes, (addRes, error) => {
//           if (!error) {
//               mul(addRes, (addRes, error) => {
//                   if (!error) {
//                       div(addRes, (addRes, error) => {
//                           if (!error) {
//                               console.log(addRes)
//                           }
//                       });
//                   }
//               });
//           }
//       });
//   }
// });
