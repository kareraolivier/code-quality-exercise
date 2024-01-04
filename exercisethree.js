/**
 * - Encoder: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
 * */

function solution(number) {
  if (number < 1) {
    return "";
  }
  const items = [
    { roman: "M", numeric: 1000 },
    { roman: "CM", numeric: 900 },
    { roman: "D", numeric: 500 },
    { roman: "CD", numeric: 400 },
    { roman: "C", numeric: 100 },
    { roman: "XC", numeric: 90 },
    { roman: "L", numeric: 50 },
    { roman: "XL", numeric: 40 },
    { roman: "X", numeric: 10 },
    { roman: "IX", numeric: 9 },
    { roman: "V", numeric: 5 },
    { roman: "IV", numeric: 4 },
    { roman: "I", numeric: 1 },
  ];
  for (const item of items) {
    if (number >= item.numeric) {
      return item.roman + solution(number - item.numeric);
    }
  }
}
console.log(solution(23));
