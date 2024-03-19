function generateFibonacciSeries(num) {
  // Initialize an array to store the Fibonacci series
  let fibonacciSeries = [];
  // Base case: If num is 0, return an empty array
  if (num === 0) {
    return fibonacciSeries;
  }
  // The first two elements of Fibonacci series are always 0 and 1
  fibonacciSeries.push(0);
  if (num > 1) {
    fibonacciSeries.push(1);
  }
  // Generate the Fibonacci series up to the numth element
  for (let i = 2; i < num; i++) {
    // Each subsequent element is the sum of the two preceding elements
    let nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextFibonacci);
  }
  return fibonacciSeries;
}
let num = 8;
console.log("Fibonacci series up to", num, ":", generateFibonacciSeries(num));
