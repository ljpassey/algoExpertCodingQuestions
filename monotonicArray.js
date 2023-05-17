function isMonotonic(array) {
  // Write your code here.
    let isDecreasing = null
    let isIncreasing = null

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i+1]) {
            isIncreasing = true
        } else if (array[i] > array[i+1]) {
            isDecreasing = true
        }
    }
    return isIncreasing && isDecreasing ? false : true

}

console.log(isMonotonic(array))




