// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10


function gcd(num1,num2){
    var small= num2<= num1 ? b:a;
    for (var i=small; i >0; i--){
        var A= num1/i, B=num/i;
        if(A%1==0&&B%1==0){
            return i;
        }
    }
}