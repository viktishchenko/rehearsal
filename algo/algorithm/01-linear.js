const array = [3, 6, 23, 543, 6, 22, 1, 432, 543];
let count = 0;

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 22)); // linearSearch(array, 22)>> 5
console.log(count); // count>>>  6
