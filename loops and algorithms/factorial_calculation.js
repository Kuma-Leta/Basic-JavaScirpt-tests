function calculateFactorial(n) {
  // Base case: if n is 0 or 1, factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Initialize the result to 1
    let factorial = 1;
    // Iterate from 2 to n (inclusive) and multiply each number to the factorial
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

// Example usage:
let n = 5;
console.log("Factorial of", n, "is", calculateFactorial(n));
