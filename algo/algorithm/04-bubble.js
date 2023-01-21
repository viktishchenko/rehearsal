/* O(n²) пузырьковая на неотсортированном массиве */

const array = [
  34, 54, 543, 345, -1, 34265, 67, 567, 6, 345, 3, 757, -5, 45, 345345, 1, 4,
  67, 0, 23, 3, 23,
];

let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count++;
    }
  }
  return arr;
}

console.log("bubbleSort(array)>>", bubbleSort(array));
/* 
selectionSort(array)>> [
     -5,     -1,   0,   1,
      3,      3,   4,   6,
     23,     23,  34,  45,
     54,     67,  67, 345,
    345,    543, 567, 757,
  34265, 345345
]
*/
console.log("count>>", count); // count>> 484 !!! (vs 231 from selectingSort & vs 98 hoare)
console.log("array.length>>", array.length); // 22
