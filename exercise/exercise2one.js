// - https://www.codewars.com/kata/525f50e3b73515a6db000b83

const createPhoneNumber = (numbers) =>
  numbers.length === 10
    ? `(${numbers.join("").slice(0, 3)}) ${numbers
        .join("")
        .slice(3, 6)}-${numbers.join("").slice(6, 10)}`
    : "";
