function divide(a, b) {
  if (b === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 0)); // This will throw an error
} catch (error) {
  console.error(error.message);
}
