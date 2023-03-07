
function twoNumberSum(array, targetSum) {
  let ansArr = []
  for (i = 0; i < array.length; i++) {
    for (k = i + 1; k < array.length; k++) {
      if ( array[i] + array[k] === targetSum ) {
        ansArr.push(array[i])
        ansArr.push(array[k])
        return ansArr
      }
    }
  }
  return ansArr
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

