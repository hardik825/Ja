//********Reverse Number*******


// function reverse(n)
// {
// 	n = n + "";                   //Convert into the String
// 	return n.split("").reverse().join("");
// }
// console.log(reverse(32243));


//*******Palindrome or not********

 
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     console.log(str)
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    console.log(palindrome("nurses run"));
//    console.log(palindrome("12321"));


//*******All Combination of String*******


// let possibleCombinations = (str) =>{
//     let combinations = [];
//       for(let i = 0 ;i < str.length; i++)
//     {
//         for(let j = i + 1; j< str.length + 1; j++)
//         {
//             combinations.push(str.slice(i , j));
//         }
//     }
//    return combinations;
// }
// console.log(possibleCombinations('return'));


// ********alphabet_order********


// function sortString(str){
//     var arr = str.split('');
//     var tmp;
//     for(var i = 0; i < arr.length; i++){
//       for(var j = i + 1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//     console.log(arr)
//     return arr.join('');
//   }
//   console.log('sorting:',sortString('webmaster'));

                        //or

// function alphabet_order(str){
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));


 
//*******String First Letter toUpperCase********

// function stringflupper(str){

//     const string =str ;
//     const words = string.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     console.log(words.join(" "));
// }
// stringflupper('all glory comes from daring to begin !!');


//*******Longest word in String*******


// function longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(longest_word('Web Development Tutorial'));


//******Count vowels in String*********


// function vowels(str){
//     str=str.toLowerCase();
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
//         {
//             count++;
//         }
//     }
//     console.log('No of Vowels in given string is:',count);
// }
// vowels('Skillqode the Programming lab');


                        //or


// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));


//******Check Number is Prime********


// function checkPrime(number) {
//     if (number <= 1) {
//       return false;
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
//   console.log(checkPrime(7));


//******accept argu check type*********


// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
//     return typeof value;
// }
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(false));


                        // or


// function checktype(arg1,arg2,arg3){
    // console.log(typeof arg1)
    // console.log(typeof arg2)
    // console.log(typeof arg3)
    // return console.log(typeof arg1,typeof arg2,typeof arg3);
// }
// checktype(['skill','development'],'Skill',(1,2,3));


//*******n-row&n-column********

// function matrix(n) {
//     var i,j;
//     for (i=0; i < n; i++)
//     {
//       for (j=0; j < n; j++)
//       {
//            if (i === j)
//            {
//              console.log(' 1 ');
//            }
                  
//            else 
//             {
//              console.log(' 0 ');}
//             }
//          console.log('----------');
//        }
//    }
// matrix(3);


//******Second Smallest and Largest Element*******


// let arr=[27,29,21,23,25,22,24,26,28,30];
// function Secondslarray(arg){

//     console.log('array:',...arr);
//     arr=arr.sort();
//     console.log('sorted array:',...arr)
//     console.log('second smallest:',arr[1]);
//     let len=arr.length;
//     console.log('second largest:',arr[len-2]);
// }
// Secondslarray(arr);


//*******Check Perfact Number********

// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(16);



// *****Factors of Positive Number********


// function positiveinteger(num){
//     console.log(`The factors of ${num} is:`);
// for(let i = 1; i <= num; i++) {

//     if(num % i == 0) {
//         console.log(i);
//     }
// }
// }
// positiveinteger(17);


//******Coins*********

// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         console.log(coins);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(70, [25, 10, 5, 2,1]));


// *******exponent&base**********


// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;        
//         }
//         return ans;
// }
// console.log(exp(2,3));

// initialise ans=1;
// i=1 ans=2*1,ans=2
// i=2 ans=2*2,ans=4
// i=3 ans=2*4,ans=8
// i=4 loop terminate


// **********************************Extract unique character from a string************************************


//  aim is to no any character will repeat..whole string stored in unique1 variable with the index 0f -1,
// condtion is false when charecter will repeat because it will already stored in uniql so it does not take that charecter

// function unique_char(str1)
// {
//  var str=str1;
//  var uniql="";
//  for (var x=0;x < str.length;x++)
//  {

//  if(uniql.indexOf(str.charAt(x))==-1)
//   {
//     console.log(uniql.indexOf())
//   uniql += str[x];  
//   console.log(uniql)
//    }
//   }
//   return uniql;
// }  
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));


// *****************get the number of occurrences of each letter in specified string********************


// function Char_Counts(str1) {
//     var uchars = {};
//     str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
//     return uchars;
//     }
//     console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));


// *****************************searching JavaScript arrays with a binary search*********************************


// function array_binarySearch(narray, delement) {
//     var mposition = Math.floor(narray.length / 2);
 
//     if (narray[mposition] === delement){
//        return mposition;
//     }
//     else if (narray.length === 1) 
//     {
//        return null;
//     }
//     else if (narray[mposition] < delement) {
//        var arr = narray.slice(mposition + 1);
//        var res = array_binarySearch(arr, delement);
//        if (res === null)
//        {
//           return null;
//        }
//        else {
//           return mposition + 1 + res;
//        }
//     }
//     else {
//        var arr1 = narray.slice(0, mposition);
//        return array_binarySearch(arr1, delement);
//     }
//  }
 
//   var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
//   console.log(array_binarySearch(myArray, 6));


// ********************************returns array elements larger than a number*************************************


// function BiggerElements(val)
//    {
//      return function(evalue,array)
//      {
//         console.log(evalue)
//      return (evalue >= val);
//      };
//    }
// var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
// console.log(result);


// *************************generates a string id (specified length) of random characters**************************


// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// console.log(text += char_list.charAt(Math.floor(Math.random() * char_list.length)));
// }
// return text;
// }
// console.log(makeid(8));


// *****************get all possible subset with a fixed length (for example 2) combinations in an array************


// function subset(arra, arra_size)
// {
//     var result_set = [], 
//         result;  
// for(var x = 0; x < Math.pow(2, arra.length); x++)
//   {
//     result = [];
//     i = arra.length - 1; 
//      do
//       {
//       if( (x & (1 << i)) !== 0)
//           {
//              result.push(arra[i]);
//            }
//         }  while(i--);

//     if( result.length >= arra_size)
//        {
//           result_set.push(result);
//         }
//     }

//     return result_set; 
// }
// console.log(subset([1, 2, 3], 2));


// ****************************************accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string******************************************


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('all glory comes from daring to begin', 'g'));


// ************************************ find the first not repeated character*******************************


// function firstNonRepeatedCharacter(string) {
//     for (var i = 0; i < string.length; i++) {
//       var nonrepeat = string.charAt(i);
//       if (string.indexOf(nonrepeat) == i && string.indexOf(nonrepeat, i + 1) == -1) {
//         return nonrepeat;
//       }
//     }
//     return null;
//   }
//   console.log(firstNonRepeatedCharacter('aabcbd'))


// *************************************to apply Bubble Sort algorithm****************************


// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x; 
// }
// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// ***************list of country names as input and returns the longest country name as output********************


// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


// ************************longest substring in a given string without repeating characters*************************


// function longest_substring_without_repeating_characters(input) {
//     var chars = input.split('');
//     var curr_char;
//     var str = "";
//     var longest_string = "";
//     var hash = {};
//     for (var i = 0; i < chars.length; i++) {
//     curr_char = chars[i];
//     if (!hash[chars[i]]) 
//     { 
//     str += curr_char; 
//     hash[chars[i]] = {index:i};
//     }
//     else 
//     {
//     if(longest_string.length <= str.length)
//     {
//     longest_string = str;
//     }
//     var prev_dupeIndex = hash[curr_char].index;
//     var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
//     str = str_FromPrevDupe + curr_char;
//     hash = {};
//     for (var j = prev_dupeIndex + 1; j <= i; j++) {
//     hash[input.charAt(j)] = {index:j};
//     }
//     }
//     }
//     return longest_string.length > str.length ? longest_string : str;
//     }
//     console.log(longest_substring_without_repeating_characters("google.com")); 
    
//     console.log(longest_substring_without_repeating_characters("example.com")); 
    

// function is_Palindrome(str1) {
//     var rev = str1.split("").reverse().join("");
//     return str1 == rev;
//     }
    
//     function longest_palindrome(str1){
    
//     var max_length = 0,
//     maxp = '';
    
//     for(var i=0; i < str1.length; i++) 
//     {
//     var subs = str1.substr(i, str1.length);
    
//     for(var j=subs.length; j>=0; j--) 
//     {
//     var sub_subs_str = subs.substr(0, j);
//     if (sub_subs_str.length <= 1)
//     continue;
    
//     if (is_Palindrome(sub_subs_str))
//     {
//     if (sub_subs_str.length > max_length) 
//     {
//     max_length = sub_subs_str.length;
//     maxp = sub_subs_str;
//     }
//     }
//     }
//     }
    
//     return maxp;
//     }
//     console.log(longest_palindrome("abracadabra"));
    
//     console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 



// ************************ pass a 'JavaScript function' as parameter*************************


// function addStudent(id, refreshCallback)
// {
//     refreshCallback();  
// }

// function refreshStudentList() {
//     console.log('Hello');
// }

// addStudent(1, refreshStudentList);


// ***************************JavaScript function to get the function name.**************************


// function tutorial(){
//     console.log(arguments.callee.name);
// }
// tutorial();