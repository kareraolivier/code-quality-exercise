// 2. Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

const fibonacci = (fibonacci) => {
  let array = [0, 1];
  while (array.length < fibonacci) {
    let sum = array.at(-1) + array.at(-2);
    array.push(sum);
    sum = 0;
  }

  return array;
};
console.log(fibonacci(5));
