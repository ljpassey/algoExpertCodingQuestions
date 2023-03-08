function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
    //declare ansArr
    let ansArr = [];
    //declare smallestDiff
    let smallestDiff = Infinity;
    //iterate through arrayOne
    for (i = 0; i < arrayOne.length; i++) {
        //iterate through arrayTwo
        for (k = 0; k < arrayTwo.length; k++) {
            //find the difference between arrayOne[i] and arrayTwo[k]
            let diff = Math.abs(arrayOne[i] - arrayTwo[k]);
            //if the difference is smaller than smallestDiff
            if (diff < smallestDiff) {
                //set smallestDiff to the difference
                smallestDiff = diff;
                //set ansArr to [arrayOne[i], arrayTwo[k]]
                ansArr = [arrayOne[i], arrayTwo[k]];
            }
        }
    }
    return ansArr;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))




