// 1. Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.

function getNestingLevel(array) {
  if (!Array.isArray(array)) return 0;
  let maxNesting = 1;
  for (const item of array) {
    if (Array.isArray(item)) {
      const level = 1 + getNestingLevel(item);
      if (level > maxNesting) {
        maxNesting = level;
      }
    }
  }
  return maxNesting;
}

function flattenArray(array) {
  const level = getNestingLevel(array);

  if (level === 1) {
    return array;
  }

  const flattenedArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      const flatSubarray = flattenArray(item);
      flattenedArray.push(...flatSubarray);
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
}

flattenArray([1, [2, [3, 4]], 5, [6, [7]]]);
