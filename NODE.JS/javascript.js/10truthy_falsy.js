// let a = [0];
// console.log(a[0]);
// console.log(a[0] == " "); //true
// console.log(" "); //false
// console.log([] === false);

// console.log(false == ""); //true
// console.log([] == 0); //true
// console.log([] == "0"); //false
// console.log([] == ""); //true
// console.log(false == " "); //true


// Truthy:-
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. 

// truthy values:-
// ex:-

// if (true){
//     console.log('hello')
// }

// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// truthy values:='array,object,string,+ve,-ve value,+double,-ve double value,big int,function,infinity,-ve infinity'

// If the first object is truthy, the logical AND operator returns the second operand:-

// let a = 2 && 0;      
// console.log(a)
// let b = 'foo' && 4;   
// console.log(b)
// let c = '' && 'foo';  
// console.log(c)
// let d='123'&&'56'
// console.log(d)
// let e=''&&'56'
// console.log(e)


// Short-circuit evaluation:- The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.

// a1 = true  && true       // t && t returns true
// console.log(a1)
// a2 = true  && false      // t && f returns false
// console.log(a2)
// a3 = false && true       // f && t returns false
// console.log(a3)
// a4 = false && (3 == 4)   // f && f returns false
// console.log(a4)
// a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
// console.log(a5)
// a6 = false && 'Cat'      // f && t returns false
// console.log(a6)
// a7 = 'Cat' && false      // t && f returns false
// console.log(a7)
// a8 = ''    && false      // f && f returns ""
// console.log(a8)
// a9 = false && ''         // f && f returns false
// console.log(a9)


// let a=true && (false && false)
// console.log(a)
// let b=true || false && false
// console.log(b)
         
// let a1= (2 == 3) &&( (4 < 0) && (1 == 1))
// console.log(a1)

// let b1= (2 == 2) || (4 < 0) && (1 == 1)
// console.log(b1)


// let g=''&&2
// console.log(g)
// console.log('hello')
// let g1=''||2
// console.log(g1)

// let g=''&&2
// console.log(g)
// let g1=''||2
// console.log(g1)

// Falsy:-A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// if(0){
//     console.log('hello')
// }
// false.
// -0.
// 0n.
// "", '', ``.
// null.
// undefined.
// NaN.
// document.all

// falsy value:-false,0,-0,0n,undefined,null,nan,'',"",``,document.all

// let a=false && "dog"
// console.log(a)

// let b=0 && "dog"
// console.log(b)

// let c =false && 1;      
// console.log(c)

// let d = true && 4;   
// console.log(d)

// let e = '' && true;  
// console.log(e)

// let f = '' && false;  
// console.log(f)

// let g=null&&undefined
// console.log(g)

// let h=undefined&&null
// console.log(h)

// let i=null||undefined
// console.log(i)

// let j=undefined||null
// console.log(j)

// let a=10&&4
// console.log(a)
// let a1=10||4
// console.log(a1)

// let b=''||0
// console.log(b)
// let b1=''&&0
// console.log(b1)