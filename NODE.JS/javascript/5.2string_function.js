// .length    //property
// const a="skill qode the programming lab"
// console.log(a.length)     //30

//1.    at(index +-)  by default 0                              =>character or undefined
// let a="skill qode the programming lab"
// console.log(a.at())                                          // s
// console.log(a.at(3))                                         // l
// console.log(a.at(-5))                                        // g
// console.log(a.at(99))                                        // undefined
// console.log(a.at(2),'hello')                                 // i hello 
// console.log(a.at(2)+'hello')                                 // ihello  


// 2.   charAt(index)  by default 0                             =>character or empty string    
// let a="skill qode the programming lab"
// console.log(a.charAt())                                      // s   
// console.log(a.charAt(3))                                     // l
// console.log(a.charAt(-5))                                    // 
// console.log(a.charAt(99))                                    //    


// 3.   indexOf(char or word,position)                          =>index or -1
// let a="skill qode the programming qode lab"
// console.log(a.indexOf())                                     // -1
// console.log(a.indexOf("t"))                                  // 11
// console.log(a.indexOf("programming"))                        // 15
// console.log(a.indexOf("x"))                                  // -1

// const str = 'To be, or not to be, that is the question.'
// let count = 0
// let position = str.indexOf('e')
// // console.log(position)

// while (position !== -1) {
//     count++
//     console.log(position)
//     position = str.indexOf('e', position + 1)
//     console.log(position)
// }
// console.log(count)  // displays 4

// searchTerm="qode"
// const indexOfFirst = a.indexOf(searchTerm);
// console.log(a.indexOf(searchTerm))                           // 6
// console.log(a.lastIndexOf(searchTerm))                       // 27
// console.log(a.indexOf(searchTerm, (indexOfFirst + 1)))       // 27

// console.log(a.indexOf("the")==11)                            // true
// console.log(a.indexOf("teh")==11)                            // false
// console.log(a.indexOf("teh")!==11)                           // true

// 4.   lastindexOf(char or word,position)                      =>index or -1
// let a="skill qode the programming qode lab"
// console.log(a.lastIndexOf())                                     // -1
// console.log(a.lastIndexOf("qode"))                               // 27
// console.log(a.lastIndexOf("t"))                                  // 11
// console.log(a.lastIndexOf("programming"))                        // 15
// console.log(a.lastIndexOf("x"))                                  // -1


//5     .charCodeAt(index)                                          =>ascii value or NaN
// let a="skill qode the programming qode lab"
// console.log(a.charCodeAt())                                         //113 
// console.log(a.charCodeAt(6))                                        //113 
// console.log(a.charCodeAt(-6))                                       //NaN
// console.log(a.charCodeAt(96))                                       //NaN

//6.    str1.concat(str2, str3, ... , strN)                            =>murge 2+ string                                   
// let a="skill qode"
// let b="the programming lab"
// console.log(a.concat(b)) //skill qode the programming lab
// console.log(a.concat(" ",b)) //skill qode the programming lab


//7     .endsWith(searchString, length)        cs                       =>boolean
// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'));                                 //true
// console.log(str1.endsWith('Best!'));                                 //false
// console.log(str1.endsWith('best', 17));                              //true
// console.log(str1.endsWith('best', 14));                              //false
// console.log(str1.endsWith('the',12));                                //true
// console.log(str1.startsWith('skill'));                               //false

//8     .startsWith(searchString, position)      cs                     =>boolean
// const str1 = 'Cats are the best!';
// console.log(str1.startsWith('cats'));                                 //false
// console.log(str1.startsWith('Cats'));                                 //true
// console.log(str1.startsWith('Cats', 0));                              //true
// console.log(str1.startsWith('Cats', 2));                              //false
// console.log(str1.startsWith('skill'));                                //false

//9.    .includes(searchString, position)           cs                  =>boolean
// let a = 'Skill qode'
// console.log(a.includes("skill"))                                        //false
// console.log(a.includes("ode"))                                          //true
// console.log(a.includes("skill",5))                                      //false
// console.log(a.includes("kill",1))                                       //true
// console.log(a.includes("lab"))                                          //false


//10.   .match(regexp or char)                                              =>[result of matching] or null
// const paragraph = 'The quick brown fox jumps over the  dog. It barked.';
// const regex = /[A-Z]/g;
// console.log(paragraph.match(regex));                                      //[ 'T', 'I' ]
// console.log(paragraph.match('z'));                                        //null
// console.log(paragraph.match('E'));                                        //null
// console.log(paragraph.match('e'));                                        //[index: 2]

//11.   .search(regexp or char)                                             =>index or -1
// let str = "hey JudE"
// let re = /[A-Z]/g
// let reDot = /[.]/g
// console.log(str.search(re))                                              // 4
// console.log(str.search(reDot))                                           // -1 
// console.log(str.search('y'))                                             // 2
// console.log(str.search('x'))                                             // -1 
// console.log(str.search('Y'))                                             // -1 


// 12.     .padEnd(targetLength, padString)
// let a = "skill qode"
// console.log(a.padEnd(9))                                                  // skill qode
// console.log(a.padEnd(4))                                                  // skill qode
// console.log(a.padEnd(13,'-'))                                             // skill qode---
// console.log('abc'.padEnd(6, "123456"));                                   // abc123

// 13.     .padStart(targetLength, padString)
// let a = "skill qode"
// console.log(a.padStart(9))                                                  // skill qode
// console.log(a.padStart(4))                                                  // skill qode
// console.log(a.padStart(13,'-'))                                             // ---skill qode
// console.log('abc'.padStart(6, "123456"));                                   // 123abc


//14.   .repeat(count)                                                          => repeat string
// console.log(a.repeat(2))                                                     //skill qodeskill qode


// 15.   replace(SearchValue,replaceValue)                                        =>replace first occurrence
// var a="skill qode the programming qode lab"
// console.log(a.replace("qode","hello"))                                       //skill hello the programming qode lab 
// console.log(a.replace("the",""))                                             //skill qode the programming qode lab 
// console.log(a.replace("programming"))                                        //skill qode the undefined qode lab 

// 16.     .replaceAll(SearchValue,replaceValue)                                =>replace all occurrence
// var a="skill qode the programming qode lab"                          
// console.log(a.replaceAll("qode","hello"))                                    //skill hello the programming hello lab 
// console.log(a.replaceAll("qode"))                                            //skill undefined the programming undefined lab 


//17.    slice(beginIndex+-, endIndex+-)                                         =>a section of string 
// const a="skill qode the programming lab"
// console.log(a.slice())                                                       //skill qode the programming lab
// console.log(a.slice(2))                                                      //ill qode the programming lab
// console.log(a.slice(-2))                                                     //ab
// const b='skill qode'                                             
// console.log(b.slice(2,8))                                                    //ill qo    
// console.log(b.slice(-8,-2))                                                  //ill qo    
// console.log(b.slice(2,-2))                                                   //ill qo    
// console.log(b.slice(-8,8))                                                   //ill qo    

//18.   .substr(beginIndex+-, length)              length never nagetive        =>a section of string 
// const a="skill qode the programming lab"
// console.log(a.substr())                                                      //skill qode the programming lab
// console.log(a.substr(2))                                                     //ill qode the programming lab
// console.log(a.substr(-2))                                                    //ab
// console.log(a.substr(2,5))                                                   //ill q
// console.log(a.substr(-6,4))                                                  //ng l


// 19.  .substring(StartIndex, EndNumber)     nagetive number and NaN means 0   =>a section of string 
// const a="skill qode the programming lab"
// console.log(a.substring())                                                    //skill qode the programming lab
// console.log(a.substring(2))                                                   //ill qode the programming lab
// var b='skill qode'                                        
// console.log(b.substring(2,8))                                                 //ill qo      
// console.log(b.substring(-8,-2))                                               //             //negative and NaN mean 0
// console.log(b.substring(2,-2))                                                //sk
// console.log(b.substring(-8,8))                                                //skill qo 


//20. .split()
// const a="skill qode the programming lab"
// console.log(a.split())                                                        //[ 'skill qode the programming lab' ]
// console.log(a.split(""))                                                      //['s', 'k', 'i', 'l', 'l', ' ','q', 'o', 'd', 'e', ' ', 't','h', 'e', ' ', 'p', 'r', 'o','g', 'r', 'a', 'm', 'm', 'i','n', 'g', ' ', 'l', 'a', 'b'] 
// console.log(a.split(" "))                                                     //[ 'skill', 'qode', 'the', 'programming', 'lab' ]
// console.log(a.split(" ",3))                                                   //[ 'skill', 'qode', 'the',]
// console.log(a.split("the"))                                                   //[ 'skill qode ', ' programming lab' ]


//21. .toLowerCase()                                                            => converted to lower case.
// const a="Skill qode the programming lab"
// console.log(a.toLowerCase())                                                 //skill qode the programming lab
// console.log(a.toLocaleUpperCase('TR'))                                       //SKİLL QODE THE PROGRAMMİNG LAB

//22. .toUpperCase()                                                            => converted to upper case.
// const a="Skill qode the programming lab"                                 
// console.log(a.toUpperCase())                                                 //SKILL QODE THE PROGRAMMING LAB
// console.log(a.toLocaleUpperCase('TR'))                                       //SKİLL QODE THE PROGRAMMİNG LAB

//23.   .toString()                                                              =>converted array to string or calling object
// var x = ["hello","world"]
// console.log(x.toString());                                                      // hello,world
// console.log(typeof(x.toString()));                                              // string

//24.trim()                                                                         
// const a="         skill qode the programming lab       "
// console.log(a.trim())       //skill qode the programming lab
// console.log(a.trimEnd())    //         skill qode the programming lab
// console.log(a.trimStart())  //skill qode the programming lab       

// 25.valueOf()
// var x = new String('Hello world');
// console.log(x.valueOf()); 
