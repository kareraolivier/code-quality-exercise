// 3. Implement a JavaScript function to find the sum of all elements in an array recursively.

const recursiveArray = (array, index = 0) =>
  index === array.length ? 0 : array[index] + recursiveArray(array, index + 1);
recursiveArray([1, 2, 3, 4, 5, 43], 0);
