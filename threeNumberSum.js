function threeNumberSum(array, targetSum) {
  // Write your code here.

  //declare ansArr
  let ansArr = [];

  //iterate through array and find integers that add up to targetSum
  for (i = 0; i < array.length; i++) {
    for (k = i + 1; k < array.length; k++) {
      for (l = k + 1; l < array.length; l++) {
        if (array[i] + array[k] + array[l] === targetSum) {
          ansArr.push([array[i], array[k], array[l]]);
        }
      }
    }
  }

    //sort ansArr
    for (i = 0; i < ansArr.length; i++) {
        ansArr[i].sort((a, b) => a - b);
    }

    //sort ansArr
    ansArr.sort((a, b) => a[1] - b[1]);
    ansArr.sort((a, b) => a[0] - b[0]);

  return ansArr;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
