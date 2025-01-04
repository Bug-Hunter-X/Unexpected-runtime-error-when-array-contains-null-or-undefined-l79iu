function printArray(arr: (number | string | null | undefined)[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element !== null && element !== undefined) {
      console.log(element);
    } else {
      console.log('Null or undefined element found at index:', i);
    }
  }
}

const myArrayWithNull = [1, null, 3];
printArray(myArrayWithNull); // Output: 1, Null or undefined element found at index: 1, 3

const myArrayWithUndefined = [1, undefined, 3];
printArray(myArrayWithUndefined); // Output: 1, Null or undefined element found at index: 1, 3