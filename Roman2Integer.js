/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
   
    var Numerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    var romanArray = s.split("");
    var numArray = [];
  
    for (let i = 0; i < romanArray.length; i++) {
      numArray.push(Numerals[romanArray[i]]);
    }
    var maxVal = Math.max(...numArray);
    var maxValIndex = numArray.indexOf(maxVal);
    if (numArray.length === 1) {
      return numArray[0];
  
    } else if (maxValIndex === 0) {
      
      return maxVal + romanToInt(romanArray.slice(1, romanArray.length).join(""));
    
    } else if (maxValIndex === romanArray.length - 1) {
  
      return maxVal - romanToInt(romanArray.slice(0, romanArray.length - 1).join(""));
    
    } else {
  
      return maxVal - romanToInt(romanArray.slice(0, maxValIndex).join("")) + romanToInt(romanArray.slice(maxValIndex + 1, romanArray.length).join(""));
    
    }
  };