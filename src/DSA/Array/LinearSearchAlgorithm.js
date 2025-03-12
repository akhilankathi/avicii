const linearSearchAlgorithm = (arr, x) => {
  let elementIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) elementIndex = i;
  }
  return elementIndex;
};

console.log(linearSearchAlgorithm([4, 5, 67, 8, 9, 3, 2, 5, 6], 6));
console.log(linearSearchAlgorithm([4, 5, 67, 8, 9, 3, 2, 5, 6], 8));
console.log(linearSearchAlgorithm([4, 5, 67, 8, 9, 3, 2, 5, 6], 67));
