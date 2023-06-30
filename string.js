// String

var txt = 'John Deo'
console.log(txt)   // John Deo
console.log(typeof txt)   //String


// Escape Characters:

var str =  'It\'s alright.';
console.log(str)   //  It's alright.



// You can use string constructor function to create string object.
// String objects provide convenient methods for text manipulation.


var primitive = 'Hello';

var obj = new String('world');

console.log(typeof primitive);  // string

console.log(typeof obj);  // object


console.log(obj.length);  // 5

console.log(obj[0]);   // w


//A String object is similar to an array of characters. String objects have an indexed property for each character (introduced in ES5, but long supported in many browsers, except old IEs), and they also have a length property.

console.log(obj.length);   // 5

console.log(obj[0]);    // w


// The primitive strings are not objects, so they don't have any methods or properties.

// String objects are being created (and then destroyed) behind the scenes every time you treat a primitive string as if it were an object

console.log(primitive.length);  //5



// Here's one more example to illustrate between a primitive string and a String Object

console.log(Boolean(""));  //false

console.log(Boolean(new String("")));   //true



//Methods:

// Length:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length)   //26

//Slice:

let string = "Apple, Banana, Kiwi";
console.log(string.slice(7,13))   // Banana


// toUppercase and toLowercase:

console.log(primitive.toUpperCase())  //HELLO

console.log(text.toLowerCase())    // abcdefghijklmnopqrstuvwxyz


// Replace:

let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "Google");
console.log(newText)  // Please Visit Google!



