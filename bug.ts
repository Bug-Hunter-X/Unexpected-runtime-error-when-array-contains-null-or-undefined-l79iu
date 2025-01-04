function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray = [1, 2, 3, 4, 5];
printArray(myArray); // Works fine

const myStringArray = ['a', 'b', 'c'];
printArray(myStringArray); // Works fine

const myMixedArray = [1, 'a', 2, 'b'];
printArray(myMixedArray); // Works fine

//But here is the problem when an array contains null or undefined values
const myArrayWithNull = [1, null, 3];
printArray(myArrayWithNull); //Error: Cannot read properties of undefined (reading 'length')

const myArrayWithUndefined = [1, undefined, 3];
printArray(myArrayWithUndefined); //Error: Cannot read properties of undefined (reading 'length')