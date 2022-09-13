

/**
 * @param {number} num
 * @return {string}
 */

var num = 790000000;
function numberToWords(num) {
  let result = "";
  const bigWordArray = {
    Billion: 1000000000,
    Million: 1000000,
    Thousand: 1000,
    Hundred: 100

  };
  const countArray = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tensArray = [
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];

  function intToHundred(num, key) {
    let result = "";
    //LESS THAN 100
    if (num === 0) {
      return result;
    } else if (num < 20) {
      result += countArray[num] + " ";
    } else if (num < 100) {
      result += tensArray[Math.floor(num / 10) - 2] + " ";
      num %= 10;

      if (num > 0) {
        result += countArray[num] + " ";
      }
      //MORE THAN 100
    } else {
      result += countArray[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
      if (num === 0) {
      } else if (num < 20) {
        result += countArray[num] + " ";
      } else {
        result += tensArray[Math.floor(num / 10) - 2] + " ";
        num %= 10;
        console.log(num);
        if (num > 0) {
          result += countArray[num] + " ";
        }
      }
    }

    return result + key + " ";
  }

  if (num === 0) {
    return "Zero";
  } else {
    for (let key in bigWordArray) {

      result += intToHundred(Math.floor(num / bigWordArray[key]), key);
      num %= bigWordArray[key];
    }
  }

  if (num !== 0) {
    if (num < 20) {
      result += countArray[num];
    } else {
      result += tensArray[Math.floor(num / 10) - 2] + " ";
      num %= 10;
      if (num !== 0) {
        result += countArray[num];
      }
    }
  }

  return result.trim();
}

console.log(numberToWords(num));
