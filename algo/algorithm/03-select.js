/* O(n²) сортировка выбором на неотсортированном массиве */

const array = [
  34, 54, 543, 345, -1, 34265, 67, 567, 6, 345, 3, 757, -5, 45, 345345, 1, 4,
  67, 0, 23, 3, 23,
];

let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minVal] > arr[j]) {
        minVal = j;
      }
      count++;
    }
    let tmp = arr[i];
    arr[i] = arr[minVal];
    arr[minVal] = tmp;
  }
  return arr;
}

console.log("selectionSort(array)>>", selectionSort(array));
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
console.log("count>>", count); // count>> 231
console.log("array.length>>", array.length); // 22
