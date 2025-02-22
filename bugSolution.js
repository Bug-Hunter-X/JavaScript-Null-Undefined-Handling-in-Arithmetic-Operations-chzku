function foo(a, b) {
  // Handle null or undefined values for a and b
  a = (a === null || a === undefined) ? 0 : a; 
  b = (b === null || b === undefined) ? 0 : b; 
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10
console.log(foo(undefined, 10)); //Output: 10