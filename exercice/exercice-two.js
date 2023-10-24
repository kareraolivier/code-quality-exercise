// 2. Write a JavaScript function to check if a given number is prime or not.

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let index = 5; index * index <= number; index += 6)
    if (number % index === 0 || number % (index + 2) === 0) return false;

  return true;
}
isPrime();
