// Promises
// ********
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

// let promise1 = new Promise((resolve, reject) => {
//     resolve("tomarrow we will discuss async & await keyword");
//     reject("cant do that not clear promises");
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

// Promise =resolve,reject,pending

// function fun1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       // const error = false;
//       const error = true;
//       if (!error) {
//         console.log("fun : your promis has been resolved");
//         resolve();
//       } else {
//         console.log("fun : your promise has not been resolved");
//         reject("sorry not fulfilled");
//       }
//     }, 2000);
//   });
// }

// fun1().then(function(){
//   console.log("Hardik : Thanks for resilving ")
// }).catch(function(){
//   console.log(`Hardik : Very bad bro `)
// })

// async function harry(){
//   console.log("inside")
//   const response = await fetch('https://api.github.com/users');
//   console.log('before response')
//   const usres = await response.json();
//   console.log ('usre resloved')
//   return usres;
//   // return "harry";
// }

// console.log("Before calling")
// let va=harry();
// console.log("mid calling")
// console.log(va);
// va.then(data=>console.log(data))
// console.log("last ")

// const posts = [
//   { title: "post one", body: "this is post one" },
//   { title: "post two", body: "this is post two" },
// ];

// function getPostes() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}<li>`;
//     });
//     document.body.innerHTML = output;
//   }, 2000);
// }

// function cretPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 3000);
// }

// getPostes();

// cretPost({ title: "Post three", body: "this is post three" }, getPostes);


//            5
function add(num, callback) {
  return callback(num + 5, false);
} //10,false
function sub(num, callback) {
  return callback(num - 3, false);
}
function mul(num, callback) {
  return callback(num * 2, false);
}
function div(num, callback) {
  return callback(num / 2, false);
}
add(5, (addRes, error) => {
  if (!error) {
    console.log("addRes : ", addRes);
    sub(addRes, (subRes, error) => {
      if (!error) {
        console.log("subRes : ", subRes);
        mul(subRes, (mulRes, error) => {
          if (!error) {
            console.log("mulRes : ", mulRes);
            div(mulRes, (divRes, error) => {
              if (!error) {
                console.log("divRes : ", divRes);
              }
            });
          }
        });
      }
    });
  }
});

// function add(num, callback) {
//   return callback(num + 5, false);
// }

// function sub(num, callback) {
//   return callback(num - 3, false);
// }

// function mul(num, callback) {
//   return callback(num * 2, false);
// }

// function div(num, callback) {
//   return callback(num / 2 - 2, false);
// }

// add(5, (addRes, error) => {
//   if (!error) {
//     sub(addRes, (subRes, error) => {
//       if (!error) {
//         mul(subRes, (mulRes, error) => {
//           if (!error) {
//             div(mulRes, (divRes, error) => {
//               if (!error) {
//                 console.log(divRes);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// })