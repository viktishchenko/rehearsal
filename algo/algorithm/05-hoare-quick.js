/* O(log(n)*n) быстрая сортировка хуара на неотсортированном массиве

         O(log(n)*n) vs O(n)
    n=128  |    0,6s    |  16s
    ------------------------------
    n=1024 |    10s     |  17min

 1операция = 1ms(условно)
 img>> ./readmeAssets/quick-sort-hoare.png
*/

const array = [
  34, 54, 543, 345, -1, 34265, 67, 567, 6, 345, 3, 757, -5, 45, 345345, 1, 4,
  67, 0, 23, 3, 23,
];

let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log("quickSort(array)>>", quickSort(array));
/* 
quickSort(array)>> [
     -5,     -1,   0,   1,
      3,      3,   4,   6,
     23,     23,  34,  45,
     54,     67,  67, 345,
    345,    543, 567, 757,
  34265, 345345
]
*/
console.log("count>>", count); // count>> 98
