//Strigs to number
//----------------------

// Here we are conerting string to number
//let str="Apple"
//console.log(str)
//Here when we are consoling we are getting the exact value
// now we are converting that string to number and checking type of it.
//console.log(Number(str))
//After doing this we get Nan as out put 
//now we will check the typeof
//let StrToNum=Number(str)
//console.log(typeof StrToNum)
//When we are checking the typeof then we are getting as Number 
// The Reson behind getting that is in the previus out put we got Nan 
//which is a special type of Number so that we got NUmber as Type of 
// StrToNum.

//-------------------------------------------------------

//Number to String
//----------------------

// let Num=1
// console.log(Num)
// console.log(String(Num))
// let NumToStr=String(Num)
// console.log(typeof NumToStr)

//String to Array
//-------------------------

// let strng="Apple"
// console.log(strng)

// let strToArr=Array.from(strng)
// console.log(strToArr)
// console.log(typeof strToArr)
// console.log(Array.isArray(strToArr));
// so as here we are checking the type of array but we are geting 
//type of array as object 
//To check exactly the type of array we will 
//use Array.isArray(place your variable name here)

//Array To String
//-------------------------

// let Arr=["Apple","Ball"]
// console.log(Arr)

// console.log(String(Arr))
// console.group(typeof(String(Arr)))


//String to Boolean
//-------------------------

//let str="Apple"
//console.log(Boolean(str))
//Here we got true as an output

//let str1=""
//console.log(Boolean(str1))
//Here we got false as an output
//this is because there i sno value in the str1
//What is the str1 consist of undefined. lets check the output

//str1=undefined

//console.log(Boolean(str1))
// so now we got false/ lets check with numbers

//str1=1
//console.log(Boolean(str1)) //we gi=ot true with 1
//str1=0
//console.log(Boolean(str1))

// Boolean to String 
//-------------------------

// let bool=true
// console.log(bool)
// console.log(typeof bool)
// console.log(String(bool))


// console.log(typeof(String(bool)))

// String to object
//-------------------------

// let str="name:John,age:30,city:New York";

// let strToAr=str.split("")
// console.log(strToAr)
// let objectFromKeyValue = {};
// const convert= strToAr.forEach(pair => {
//     let [key, value] = pair.split(':');
//     key = key?.trim(); // Remove leading/trailing spaces
//     value = value?.trim(); // Remove leading/trailing spaces
//     objectFromKeyValue[key] = value;
// });

// console.log(objectFromKeyValue)

// Object to string
//-------------------------

// let obj={
//     name:"Aiyaz",
//     age:25
// }

// console.log(JSON.stringify(obj))
// let objtToStr=JSON.stringify(obj)
// console.log(typeof objtToStr)