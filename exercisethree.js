/**
 * - Encoder: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
 * */

function solution(number) {
  if (number < 1) {
    return "";
  }
  if (number >= 1000) {
    return "M" + solution(number - 1000);
  }
  if (number >= 900) {
    return "CM" + solution(number - 900);
  }
  if (number >= 500) {
    return "D" + solution(number - 500);
  }
  if (number >= 400) {
    return "CD" + solution(number - 400);
  }
  if (number >= 100) {
    return "C" + solution(number - 100);
  }
  if (number >= 90) {
    return "XC" + solution(number - 90);
  }
  if (number >= 50) {
    return "L" + solution(number - 50);
  }
  if (number >= 40) {
    return "XL" + solution(number - 40);
  }
  if (number >= 10) {
    return "X" + solution(number - 10);
  }
  if (number >= 9) {
    return "IX" + solution(number - 9);
  }
  if (number >= 5) {
    return "V" + solution(number - 5);
  }
  if (number >= 4) {
    return "IV" + solution(number - 4);
  }
  if (number >= 1) {
    return "I" + solution(number - 1);
  }
}
