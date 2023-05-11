function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n.toString();
  }
}

// Example usage
console.log(fizzbuzz(3)); // Output: "Fizz"
console.log(fizzbuzz(5)); // Output: "Buzz"
console.log(fizzbuzz(15)); // Output: "FizzBuzz"
console.log(fizzbuzz(4)); // Output: "4"
