/* O(log²) бинарный поиск в отсортированном массиве */

const array = [
  23, 24, 123, 354, 543, 656, 833, 932, 1245, 2376, 2521, 3243, 5353, 23442,
];

let count = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let flag = false;
  let position = -1;
  while (flag === false && start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      flag = true;
      position = middle;
      return position;
    }
    if (arr[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log("binarySearch(array, 354) :>> ", binarySearch(array, 5353)); // :>>  12
console.log("count :>> ", count); // :>>  4
