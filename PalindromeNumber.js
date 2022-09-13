
 
 var isPalindrome = function(x) {
    let xString = x.toString().split("");
    let answer = true;
    for (x = 0; x < Math.floor(xString.length / 2); x++) {
        if (xString[x] !== xString[xString.length - 1 - x]) {
            answer = false
        };
    };
    return answer
};

console.log(isPalindrome(123421));

