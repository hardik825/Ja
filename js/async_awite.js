// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     //   resolve;
//     } else {
//       reject("Shop is closed");
//     }
//   });
// }
// async function kitchen() {
//   try {
//     await console.log("1");
//     await console.log("2");
//     await time(2000)
//     console.log("3");
//     await time(1500)
//     console.log("4");
//     await console.log("5");

//   } catch (error) {
// console.log("Customer left");
//   } finally {
// console.log("Day ended, shop closed");
//   }
// }

// kitchen();

// 1
// 2
// 3
// 4
// 5

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject("Shop is closed");
    }
  });
}
async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
}

console.log("Before");
kitchen();
console.log("after");

// ....true;
// Before
// after
// strawberry was selected
// Day ended, shop closed


//  flase...
// Before
// after
// Customer left Shop is closed
// Day ended, shop closed