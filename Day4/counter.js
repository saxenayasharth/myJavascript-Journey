/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n)
{var num = n;
    return function() {
    num++;
    console.log(num)
    return num;    
    };
};

 
const counter = createCounter(10)
counter() 
counter()
counter()