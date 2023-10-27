// 2. Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

const fibonacci = (fibonacci) => {
  let array = [0, 1];
  for (let sum = 0; array.length < fibonacci; sum = 0) {
    sum = array.at(-1) + array.at(-2);
    array.push(sum);
  }
  return array;
};
console.log(fibonacci(5));
