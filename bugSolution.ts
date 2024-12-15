function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error("Invalid input type. Both arguments must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, "2"); // Safe: Console error and 0
let result3 = addSafe(1, 2); //Correct: 3