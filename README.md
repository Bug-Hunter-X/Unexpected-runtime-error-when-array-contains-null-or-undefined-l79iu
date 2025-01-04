# Unexpected runtime error when array contains null or undefined

This code demonstrates an uncommon TypeScript bug where using the `any[]` type with an array containing `null` or `undefined` values leads to a runtime error. TypeScript's type system doesn't prevent this, resulting in unexpected behavior.

The `printArray` function, designed to iterate over and print elements of an array, throws an error when it encounters an array with `null` or `undefined` entries, even though the function's type annotation accepts `any[]`. This is because TypeScript doesn't enforce the validity of array indexes when using `any[]` type. 

The solution involves using a more specific type for the array elements or performing explicit null/undefined checks before accessing array elements.