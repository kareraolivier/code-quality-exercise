/**
 * - Decoder: https://www.codewars.com/kata/51b6249c4612257ac0000005
 */

function romanToNumber(roman) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  roman = roman.replace(/IV/g, "IIII");
  roman = roman.replace(/IX/g, "VIIII");
  roman = roman.replace(/XL/g, "XXXX");
  roman = roman.replace(/XC/g, "LXXXX");
  roman = roman.replace(/CD/g, "CCCC");
  roman = roman.replace(/CM/g, "DCCCC");

  for (let i = 0; i < roman.length; i++) {
    result += romanNumbers[roman[i]];
  }

  return result;
}
