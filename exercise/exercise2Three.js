// - https://www.codewars.com/kata/585db3e8eec141ce9a00008f

const reverseVowels = (str) => {
  const checkVowels = (str) =>
    ["i", "u", "o", "a", "e"].includes(str.toLowerCase());
  const vowels = [...str].filter((str) => checkVowels(str));
  return [...str]
    .map((str) => (checkVowels(str) ? vowels.pop() : str))
    .join("");
};
