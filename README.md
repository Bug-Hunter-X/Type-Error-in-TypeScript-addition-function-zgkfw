# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript and provides a solution.

## The Bug
The `add` function is designed to take two numbers and return their sum. However, if we pass a string as an argument, a type error occurs because TypeScript's type system enforces type safety.  This example showcases TypeScript's ability to prevent runtime errors during development.

## The Solution
The solution involves type guarding or type assertion to ensure both arguments are numbers before performing the addition.