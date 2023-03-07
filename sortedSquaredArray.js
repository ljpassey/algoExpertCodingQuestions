function sortedSquaredArray(array) {
  const last = array.length - 1;

  let startPointer = 0;
  let endPointer = last;

  const newArr = new Array(array.length)

  for (let i = last; i > -1; i--) {
    const start = array[startPointer] ** 2;
    const end = array[endPointer] ** 2;

    if ( end > start) {
        newArr[i] = end;
        endPointer--;
    } else {
        newArr[i] = start;
        startPointer++;
    }
  }
  return newArr
}

console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]));
