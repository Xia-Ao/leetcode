let testArray = [34, 7, 23, 32, 5, 62, 1, 78, 65, 3];

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length >> 1;
  let left = [];
  let right = [];
  const cur = arr.splice(mid, 1)[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= cur) {
      left.push(arr[i])
    } else (
      right.push(arr[i])
    )
  }

  return [...quickSort(left), cur, ...quickSort(right)]
}

console.log(quickSort(testArray));